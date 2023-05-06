import React, { useState, useEffect } from "react";
import styles from './singleproductcard.module.css'
import { useParams } from "react-router-dom";
import servicesApi from "../../services/product";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const SingleProductCard = (props) => {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const dispatch = useDispatch();
    
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
                            <button className={styles["quantity-control"]} onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</button> 
                                <span>{quantity}</span>
                            <button className={styles["quantity-control"]} onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>
                        <button className={styles.add} onClick={() => dispatch(addToCart(product))}>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductCard;
