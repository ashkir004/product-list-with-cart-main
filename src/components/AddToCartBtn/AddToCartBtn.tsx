import styles from './AddToCartBtn.module.css';
import cartIcon from '/assets/images/icon-add-to-cart.svg';
import { Plus } from 'lucide-react';
import { Minus } from 'lucide-react';


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
                        <Minus size={20} stroke-width={2.5} />
                    </button>
                    <span>{quantity}</span>
                    <button className={styles.incrementDecrementBtn} onClick={handleAdd}>
                        <Plus size={20} stroke-width={2.5} />
                    </button>
                </div>
            )}

        </div>
    );
}

export default AddToCartBtn;