
import styles from './ProductCart.module.css';

function EmptyProductCart() {
    return (
        <div className={styles.emptyProductCart}>
            <div>
                <img className={styles.emptyCartImage} src="/assets/images/illustration-empty-cart.svg" alt="Empty Cart" />
            </div>
            <p className={styles.emptyCartText}>Your added items will appear here</p>
        </div>
    );
}

export default EmptyProductCart;