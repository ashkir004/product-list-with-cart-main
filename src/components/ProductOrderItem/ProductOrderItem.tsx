import styles from './ProductOrderItem.module.css';
import type { Product } from '../../types';

type ProductOrderItemProps = {
    id: Product['id'];
    name: Product['name'];
    price: Product['price'];
    quantity: number;
    thumbnail: Product['image']['thumbnail'];
}

function ProductOrderItem({ name, price, quantity, thumbnail }: ProductOrderItemProps) {

    return (
        <div className={styles.orderItem}>
            <img className={styles.itemThumbnail} src={thumbnail} alt={name} />
            <div className={styles.itemBody}>
                <h1 className={styles.itemTitle}>{name}</h1>
                <div className={styles.itemInfo}>
                    <span className={styles.itemQuantity}>{`${quantity}x`}</span>
                    <span className={styles.itemPrice}>@ ${price.toFixed(2)}</span> 
                </div>
            </div>
            <p className={styles.itemTotal}>${(quantity * price).toFixed(2)}</p>
        </div>
    );
}

export default ProductOrderItem;