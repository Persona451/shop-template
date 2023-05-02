import React from 'react';
import { Link } from 'react-router-dom';
import styles from './product.module.css'

const Product = ({img, title, date, price, id, gridView}) => {
    // const gridView = active менять на false
    return (
        <div className={gridView ? styles.card : styles["card-list"]}>
            <img src={img} alt="" className={styles.img} />
            <div className={styles.info}>
                <Link to={`/product/${id} `} className={styles.name}>
                {title}
                </Link>
                <h4 className={styles.price}>
                    {price}
                </h4>
                <p>{date}</p>
            </div>
        </div>
    );
};

export default Product;