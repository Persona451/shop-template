import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const AddProductForm = () => {
    const [title, setTitle] = useState('')
    const [descr, setDescr] = useState('')
    const [price, setPrice] = useState(0)
    const [categories, setCategories] = useState([])
    const [image, setImage] = useState(null)

    const addProduct = (e) => {
        e.preventDefault()
        const newProduct = {
            title,
            descr,
            price,
            categories
        }
        if(image) {
            const imageData = new FormData()
            const filename = Date.now() + image.name
            imageData.append("name", filename)
            imageData.append("file", image)
            axios.post("https://whispering-river-87788.herokuapp.com/api/upload", imageData)
                .then(res => { 
                    console.log(res)
                    newProduct.img = `https://whispering-river-87788.herokuapp.com/images/${filename}`
                        axios.post("https://whispering-river-87788.herokuapp.com/api/products", newProduct)
                            .then(res => console.log(res))
                            .catch(err => console.log(err))
                })
                .catch(err => console.log(err))
        }
    }
    return (
        <form onSubmit={addProduct}>
            <TextField 
            label="title" 
            variant="outlined" 
            value={title} 
            onChange={e => setTitle(e.target.value)}
            />
            <TextField 
            label="description" 
            variant="outlined" 
            value={descr} 
            onChange={e => setDescr(e.target.value)}
            />
            <TextField 
            label="price" 
            variant="outlined" 
            value={price} 
            onChange={e => setPrice(e.target.value)}
            />
            <TextField 
            label="categories" 
            variant="outlined" 
            // value={categories.join(",")} 
            onChange={e => setCategories(e.target.value.split(" "))}
            />
            <input type="file"
            onChange={e => setImage(e.target.files[0])}
            />
            <input type="submit" />
        </form>
    );
};

export default AddProductForm;