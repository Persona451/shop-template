import axios from "axios"
import { rootApi } from "../api"

const getProducts = () => {
    return axios.get(rootApi + "/products")
}

const getProduct = (id) => {
    return axios.get(`${rootApi}/product/${id}`)
}

const deleteProduct = (id) => {
    return axios.delete(`https://whispering-river-87788.herokuapp.com/api/product/${id}`)
}

export default {
    getProducts,
    getProduct,
    deleteProduct
    
}