import styles from './ProductCartItem.module.css';
import type { Product } from '../../types';
import { useCartDispatch } from '../../hooks/useCartDispatch';

type ProductCartItemProps = {
    id: Product['id'];
    name: Product['name'];
    price: Product['price'];
    quantity: number;
}

function ProductCartItem({ id, name, price, quantity }: ProductCartItemProps) {
    const dispatch = useCartDispatch();

    function handleRemoveItem() {
        dispatch({ 
            type: "REMOVE_ITEM",
            payload: {
                product: { id } as Product, // Cast to Product type
                quantity: 0
            }
        });
    }

    return (
        <div className={styles.cartItem}>
            <div className={styles.itemBody}>
                <h1 className={styles.itemTitle}>{name}</h1>
                <div className={styles.itemInfo}>
                    <span className={styles.itemQuantity}>{`${quantity}x`}</span>
                    <span className={styles.itemPrice}>@ ${price.toFixed(2)}</span> 
                    <span className={styles.itemTotal}>${(quantity * price).toFixed(2)}</span>
                </div>
            </div>
            <button className={styles.removeItem} onClick={handleRemoveItem}>
                <img src="/assets/images/icon-remove-item.svg" alt='remove item' />
            </button>
        </div>
    );
}

export default ProductCartItem;