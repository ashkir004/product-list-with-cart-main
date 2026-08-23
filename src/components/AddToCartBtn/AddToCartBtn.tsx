import styles from './AddToCartBtn.module.css';
import cartIcon from '/assets/images/icon-add-to-cart.svg';
import addToCartIcon from '/assets/images/icon-increment-quantity.svg';
import removeFromCartIcon from '/assets/images/icon-decrement-quantity.svg';

type AddToCartBtnProps = {
    quantity: number;
    handleAddToCart: (count: number) => void;
    handleRemoveFromCart: (count: number) => void;
}

function AddToCartBtn({ quantity, handleAddToCart, handleRemoveFromCart }: AddToCartBtnProps) {    
    
    function handleAdd() {
        handleAddToCart(quantity + 1);
    }

    function handleRemove() {
        if (quantity > 0) {
            handleRemoveFromCart(quantity - 1);
        }
    }

    return (
        <div className={styles.addToCartBtn}>

            {quantity <= 0 ? (
                <button className={styles.btn} onClick={handleAdd}>
                    <img className={styles.cartIcon} src={cartIcon} alt="Add to Cart" />
                    <span className={styles.btnText}>Add to Cart</span>
                </button>
            ) : (
                <div className={styles.incrementDecrementContainer}>
                    <button className={styles.incrementDecrementBtn} onClick={handleRemove}>
                        <img className={styles.incrementDecrementIcon} src={removeFromCartIcon} alt="Remove from Cart" />
                    </button>
                    <span>{quantity}</span>
                    <button className={styles.incrementDecrementBtn} onClick={handleAdd}>
                        <img className={styles.incrementDecrementIcon} src={addToCartIcon} alt="Add to Cart" />
                    </button>
                </div>
            )}

        </div>
    );
}

export default AddToCartBtn;