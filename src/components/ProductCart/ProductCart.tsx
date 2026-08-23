import styles from './ProductCart.module.css';
import ProductCartItem from '../ProductCartItem/ProductCartItem';

function ProductCart() {
  return (
    <div className={styles.productCart}>
        <h2 className={styles.cartTitle}>Your Cart (7)</h2>
        <ul className={styles.cartItems}>

            <ProductCartItem 
                name="Classic Tiramisu"
                price={5.50}
                quantity={1}
            />

            <ProductCartItem 
                name="Vanilla Bean Crème Brûlée"
                price={7.00}
                quantity={4}
            />

            <ProductCartItem 
                name="Vanilla Panna Cotta"
                price={6.50}
                quantity={2}
            />

        </ul>

        <div className={styles.totals}>
            <p className={styles.totalsLabel}>Order Total</p>
            <span className={styles.totalsValue}>$46.50</span>
        </div>

        <div className={styles.carbonNeutral}>
            <img src="/assets/images/icon-carbon-neutral.svg" alt='carbon neutral' />
            <p>This is a <b>carbon-neutral</b> delivery</p>
        </div>

        <button className={styles.confirmOrder}>
            Confirm Order
        </button>

    </div>
  );
}

export default ProductCart;