import styles from './AddToCartBtn.module.css';
import cartIcon from '/assets/images/icon-add-to-cart.svg';
import addToCartIcon from '/assets/images/icon-increment-quantity.svg';
import removeFromCartIcon from '/assets/images/icon-decrement-quantity.svg';
import { useState } from 'react';

function AddToCartBtn() {

    const [ count, setCount ] = useState(0);

    function getBtn() {

        if (count <= 0) {
            document.body.removeAttribute('data-cart-activated');
            return <button className={styles.btn} onClick={() => setCount(count + 1)}>
                <img className={styles.cartIcon} src={cartIcon} alt="Add to Cart" />
                <span className={styles.btnText}>Add to Cart</span>
            </button>
        } else {
            document.body.setAttribute('data-cart-activated', 'true');
            return <button className={styles.btnIncrementDecrement} onClick={() => setCount(count + 1)}>
                <img className={styles.incrementDecrementIcon} src={removeFromCartIcon} alt="Remove from Cart" onClick={(e) => {
                    e.stopPropagation();
                    setCount(count - 1);
                }} />
                <span className={styles.count}>{count}</span>
                <img className={styles.incrementDecrementIcon} src={addToCartIcon} alt="Add to Cart" />
            </button>
        }
    }

    return (
        <div className={styles.addToCartBtn}>
        {getBtn()}
        </div>
    );
}

export default AddToCartBtn;