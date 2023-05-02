import React, { useState, useEffect } from "react";
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Filter from '../../components/Filter/Filter';
import Info from '../../components/Info/Info';
import Product from '../../components/Product/Product';
import styles from './catalogpage.module.css'
import servicesApi from "../../services/product";

const CatalogPage = (props) => {
  const [products, setProducts] = useState([]);
  const [sorted, setSorted] = useState('price')
  useEffect(() => {
    
    servicesApi.getProducts()
      .then(res => setProducts(res.data))
      .catch(err => console.log(err.response.data))
  }, []);
  
  useEffect(() => {
    if(sorted == 'price') {
      products.sort((a, b) => a.price - b.price)
      setProducts(sortedProducts)
    }
  },[sorted])

  return (
    <div>
      <Breadcrumbs  />
      <Filter setSorted={setSorted} sorted={sorted}/>
      <div className={styles["products-wrapper"]}>
      {products.map(product => {
        const dateString = product.createdAt;
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        return (
        <Product
          key={product._id}
          img={product.img}
          date={formattedDate}
          title={product.title}
          id={product._id}
          price={product.price}
        />
        );
      })}
      </div>
      <Info />
    </div>
  );
};

export default CatalogPage;