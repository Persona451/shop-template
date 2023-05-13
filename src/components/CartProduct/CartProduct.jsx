import React from 'react';
import { useSelector } from 'react-redux';
import styles from './cartproduct.module.css';

const CartProduct = () => {
    const products = useSelector(state => state.cart.productsCart)
    console.log(products);
    return (
        <div>
            {products.map((product) => {
                return (
                    <div className={styles.wrapper}>
                        <img src={product.img} alt="" className={styles.img} />
                        <p className={styles.name}>{product.title}</p>
                        <p className={styles.price}>{product.price}</p>
                        <p className={styles.quantity}>{product.quantity}</p>
                        <p className={styles.subtotal}>{product.quantity * product.price}</p>
                        <button><img src="images/delete-icon.png" alt="" />delete</button>
                    </div>
        );
      })}
            
        </div>
    );
};

export default CartProduct;