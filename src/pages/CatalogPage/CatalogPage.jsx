import React, { useState, useEffect } from "react";
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Filter from '../../components/Filter/Filter';
import Info from '../../components/Info/Info';
import Product from '../../components/Product/Product';
import styles from './catalogpage.module.css'
import servicesApi from "../../services/product";
import ReactPaginate from 'react-paginate';

const CatalogPage = (props) => {
  const [products, setProducts] = useState([]);
  const [sorted, setSorted] = useState('priceAsc')
  const [productOffset, setproductOffset] = useState(0); // с какого продукта начинать
  const productsPerPage = 4
  const [forcePage, setForcePage] = useState(0)
  const [gridView, setGridView] = useState(true)

  const endOffset = productOffset + productsPerPage; // число, до которого нам нужно показывать продукт
  console.log(`Loading items from ${productOffset} to ${endOffset}`);
  const currentProducts = products.slice(productOffset, endOffset) // product.slice(0,4) - [0,1,2,3]
  const pageCount = Math.ceil(products.length / productsPerPage); // количество страниц

  const handlePageClick = (event) => {
    const newOffset = (event.selected * productsPerPage) // 2 * 4 = 8
    setproductOffset(newOffset);
    setForcePage(event.selected)
  };

  useEffect(() => {

    servicesApi.getProducts()
      .then(res => {
        const sortedProducts = res.data.sort((a, b) => a.price - b.price)
        setProducts(sortedProducts)
      })
      .catch(err => console.log(err.response.data))
  }, []);

  useEffect(() => {
    if (sorted == 'priceAsc') {
      const sortedProducts = [...products].sort((a, b) => a.price - b.price)
      setProducts(sortedProducts)
    }
    if (sorted == 'newestAsc') {
      const sortedNewest = [...products].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      setProducts(sortedNewest)
    }
    if (sorted == 'priceDesc') {
      const sortedProducts = [...products].sort((a, b) => b.price - a.price)
      setProducts(sortedProducts)
    }
    if (sorted == 'newestDesc') {
      const sortedNewest = [...products].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      setProducts(sortedNewest)
    }
    setForcePage(0)
    setproductOffset(0)
  }, [sorted])

  return (
    <div>
      <Breadcrumbs  />
      <Filter setSorted={setSorted} sorted={sorted}
        setGridView={setGridView}
      />
      <div className={styles["products-wrapper"]}>
      {currentProducts.map(product => {
        const dateString = product.createdAt;
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        return (
        <Product
          gridView={gridView}
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
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        containerClassName={styles["pagination-wrapper"]}
        pageLinkClassName={styles["pagination-page"]}
        nextClassName={styles["pagination-next"]}
        activeLinkClassName={styles["pagination-active"]}
        forcePage={forcePage}
      />
      <Info />
    </div>
  );
};

export default CatalogPage;