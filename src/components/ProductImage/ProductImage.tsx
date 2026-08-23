import styles from './ProductImage.module.css';
import type { Product } from '../../types';

type ProductImageProps = {
  image?: Product['image'];
  name?: Product['name'];
};

function ProductImage({ image, name }: ProductImageProps) {
    return (
        <div className={styles.productImage}>
        <picture className={styles.picture}>
            <source media="(min-width: 1024px)" srcSet={image?.desktop} />
            <source media="(min-width: 768px)" srcSet={image?.tablet} />
            <source media="(max-width: 767px)" srcSet={image?.mobile} />
            <img src={image?.mobile} alt={name} className={styles.img} />
        </picture>
        </div>
    );
}

export default ProductImage;
