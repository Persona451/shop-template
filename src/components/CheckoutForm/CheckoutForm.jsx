import React from 'react';
import styles from './checkout.module.css'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { useSelector } from 'react-redux';
import { CardElement } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const sum = useSelector(state => state.cart.sum);
  const products = useSelector(state => state.cart.productsCart);
  return (
    <>
      <Breadcrumbs />
      <h1>Сумма оплаты: {sum}</h1>
      <div className={styles.wrapper}>
        <form className={styles.card}>
          <div>
            <CardElement />
          </div>
          <button>Pay</button>
        </form>
        <div className={styles["product-wrapper"]}>
          <p className={styles["product-title"]}> Product  <span>Subtotal</span> </p>
          {products.map((product) => (
            <div>
              <p className={styles["product-name"]}>{product.title} - {product.price} X {product.quantity}<span>{product.price * product.quantity}</span> </p>
            </div>
          ))}
          <p className={styles["product-total"]}> Total <span>{sum}</span> </p>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;