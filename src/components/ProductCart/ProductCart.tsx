import styles from './ProductCart.module.css';
import ProductCartItem from '../ProductCartItem/ProductCartItem';
import EmptyProductCart from './EmptyProductCart';
import { useCart } from '../../hooks/useCart';

function ProductCart() {
    const cart = useCart();
    
    function calculateTotal() {
        return cart.items.reduce((total, item) => {
        return total + item.product.price * item.quantity;
        }, 0).toFixed(2);
    }

    return (
        <div className={styles.productCart}>
            <h2 className={styles.cartTitle}>Your Cart ({cart.items.length})</h2>

            {cart.items.length === 0 ? (
                <EmptyProductCart />
            ) : <>
                    <div className={styles.cartItems}>

                        {cart.items.map((item) => (
                            <ProductCartItem
                                key={item.product.id}
                                id={item.product.id}
                                name={item.product['name']}
                                price={item.product['price']}
                                quantity={item.quantity}
                            />
                        ))}

                    </div>

                    <div className={styles.totals}>
                        <p className={styles.totalsLabel}>Order Total</p>
                        <span className={styles.totalsValue}>${calculateTotal()}</span>
                    </div>

                    <div className={styles.carbonNeutral}>
                        <img src="/assets/images/icon-carbon-neutral.svg" alt='carbon neutral' />
                        <p>This is a <b>carbon-neutral</b> delivery</p>
                    </div>

                    <button className={styles.confirmOrder}>
                        Confirm Order
                    </button>
                </>
        }

        </div>
    );
}

export default ProductCart;