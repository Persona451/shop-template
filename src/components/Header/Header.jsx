import React from "react";
import styles from "./header.module.css";
import Modal from "../Modal/Modal";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../redux/cartSlice";

const Header = () => {
    const isOpen = useSelector(state => state.cart.isOpen);
    const dispatch = useDispatch()
    const cartQuantity = useSelector(state => state.cart.quantityCart);
    const activeClass = ({ isActive }) => {
        return isActive ? `${styles.active} ${styles.link}` : styles.link;
    };
    return (
        <>
            <header>
                <div className={styles.wrapper}>
                    <nav className={styles.nav}>
                        <NavLink to="/" className={activeClass}>Home</NavLink>
                        <NavLink to="/account" className={activeClass}>Account</NavLink>
                        <NavLink to="/catalog" className={activeClass}>Shop</NavLink>
                        <NavLink to="/contacts" className={activeClass}>Contacts</NavLink>
                    </nav>
                    <div className={styles.icons}>
                        <a href="/" className={styles.icon}>
                            <img src="/images/profile-icon.png" alt="" className={styles.icon} />
                        </a>
                        <p className={styles.icon}>
                            <img src="/images/search-icon.png" alt="" className={styles.icon} />
                        </p>
                        <p className={styles.icon}>
                            <img src="/images/favorite-icon.png" alt="" className={styles.icon} />
                        </p>
                        <p className={styles.icon}>
                        {cartQuantity > 0 && <span className={styles.quantity}>{cartQuantity}</span>}
                            <img src="/images/basket-icon.png" alt="" className={styles.icon} 
                            onClick={() => {
                                if(cartQuantity !== 0)
                                dispatch(openModal())
                            }}
                            />
                        </p>
                    </div>
                    { isOpen && <Modal /> }
                </div>
            </header>
        </>
    );
};

export default Header;