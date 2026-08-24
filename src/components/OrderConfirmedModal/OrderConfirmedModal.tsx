import styles from './OrderConfirmedModal.module.css';
import { useCart } from '../../hooks/useCart';
import ProductOrderItem from '../ProductOrderItem/ProductOrderItem';


function OrderConfirmedModal({ handleStartNewOrder }: { handleStartNewOrder: () => void }) {
    const cart = useCart();

    return (
        <div className={styles.modalContainer}>
            <div className={styles.modalContent}>
                <img className={styles.modalImage} src="/assets/images/icon-order-confirmed.svg" alt="Order Confirmed" />

                <h2 className={styles.modalTitle}>Order Confirmed</h2>
                <p className={styles.modalMessage}>
                    We hope you enjoy your food!
                </p>

                <div className={styles.modalBody}>

                    <div className={styles.modalItems}>
                        {cart.items.map((item) => (
                            <ProductOrderItem
                            key={item.product.id}
                            id={item.product.id}
                            name={item.product['name']}
                            price={item.product['price']}
                            quantity={item.quantity}
                            thumbnail={item.product.image.thumbnail}
                            />
                        ))}
                    </div>

                    <div className={styles.modalTotal}>
                        <p className={styles.modalTotalLabel}>Order Total</p>
                        <span className={styles.modalTotalValue}>
                            ${cart.items.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2)}
                        </span>
                    </div>

                </div>

                <button className={styles.startNewOrderBtn}
                        onClick={handleStartNewOrder}
                        >
                        Start New Order
                    </button>
            </div>
        </div>
    );
}

export default OrderConfirmedModal;