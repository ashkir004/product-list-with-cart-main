import styles from './ProductCart.module.css';
import ProductCartItem from '../ProductCartItem/ProductCartItem';
import EmptyProductCart from './EmptyProductCart';
import OrderConfirmedModal from '../OrderConfirmedModal/OrderConfirmedModal';
import { useCart } from '../../hooks/useCart';
import { useCartDispatch } from '../../hooks/useCartDispatch';
import { useState } from 'react';

function ProductCart() {
    const cart = useCart();
    const dispatch = useCartDispatch();
    const [modalOpen, setModelOpen ] = useState(false);
    
    function calculateTotal() {
        return cart.items.reduce((total, item) => {
        return total + item.product.price * item.quantity;
        }, 0).toFixed(2);
    }

    function handleStartNewOrder() {
        dispatch({ type: "CLEAR_CART", payload: cart.items[0] });
        setModelOpen(false);
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

                    <button className={styles.confirmOrder}
                        onClick={() => setModelOpen(true)}
                        >
                        Confirm Order
                    </button>
                </>
        }

        {modalOpen && <OrderConfirmedModal handleStartNewOrder={handleStartNewOrder} />}
        </div>
    );
}

export default ProductCart;