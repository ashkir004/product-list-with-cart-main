import styles from './ProductInfo.module.css';

type ProductInfoProps = {
  name: string;
  category: string;
  price: number;
};

function ProductInfo({ name, category, price }: ProductInfoProps) {
  return (
    <div className={styles.productInfo}>
        <p className={styles.name}>{name}</p>
        <p className={styles.category}>{category}</p>
        <p className={styles.price}>${price.toFixed(2)}</p>
    </div>
  );
}

export default ProductInfo;
