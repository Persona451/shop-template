import React from "react";
import { useSelector } from "react-redux";
import styles from "./modal.module.css";

const Modal = () => {
  const products = useSelector(state => state.cart.productsCart)
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <img
          src="/images/basket-close-icon.png"
          alt=""
          className={styles.close}
        />
        <h2 className={styles.title}>Shopping Cart</h2>
        <div className={styles.line}></div>
        <div className={styles.products}>
          {products.map(product => (
            <div key={product.id} className={styles.product}>
              <img src={product.img} alt={product.img} />
              <div className={styles.info}>
                <h5 className={styles.name}>{product.title}</h5>
                <p>1 x Rs. {product.price}</p>
              </div>
              <img src="/images/close-icon.png" alt="" />
            </div>
          ))}
        </div>
        <div className={styles.bottom}>
          <div className={styles.total}>
            <p className={styles.subtotal}>Subtotal</p> Rs. {getTotalPrice(products)}
          </div>
          <div className={styles.line}></div>
          <a href="/cart" className={styles.link}>View Cart</a>
          <a href="/checkout" className={styles.link}>Checkout</a>
        </div>
      </div>
    </div>
  );
};

function getTotalPrice(products) {
  return products.reduce((acc, product) => acc + product.price, 0);
}

export default Modal;
