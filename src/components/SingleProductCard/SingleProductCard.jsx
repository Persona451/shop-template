import React, { useState, useEffect } from "react";
import styles from './singleproductcard.module.css'
import { useParams } from "react-router-dom";
import servicesApi from "../../services/product";

const SingleProductCard = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    console.log(props);
    
    useEffect(() => {
        document.documentElement.scroll({
          top: "0",
          behavior: "smooth"
        });
        servicesApi.getProduct(id).then((res) => {
          setProduct(res.data);
        });
      }, []);

    const date = new Date(product.createdAt);
    const options = { day: "numeric", month: "short", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    
    return (
        <div className={styles.card}>
            <div className={styles.wrapper}>
                <div className={styles["img-wrapper"]}>
                    <img src={product.img} alt="" />
                </div>
                <div className={styles.info}>
                    <h1 className={styles.title}>{product.title}</h1>
                    <p className={styles.price}>{product.price}</p>
                    <p className={styles.descr}>{product.descr}</p>
                    <div className={styles["control-wrapper"]}>
                        <div className={styles.quantity}>
                            <button className={styles["quantity-control"]}>-</button> 
                                <span>1</span>
                            <button className={styles["quantity-control"]}>+</button>
                        </div>
                        <button className={styles.add}>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductCard;