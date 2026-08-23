import styles from './ProductCard.module.css';
import ProductImage from '../ProductImage/ProductImage';
import ProductInfo from '../ProductInfo/ProductInfo';
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn';
import type { Product } from '../../types';

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
    return (
        <div className={styles.productCard}>
            <div className={styles.imageBtnContainer}>
                <ProductImage 
                    image={product['image']} 
                    name={product['name']} 
                    />
                <AddToCartBtn />
            </div>
        <ProductInfo 
            name={product['name']} 
            category={product['category']} 
            price={product['price']} />
        </div>
    );
}

export default ProductCard;