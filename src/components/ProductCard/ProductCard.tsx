import styles from './ProductCard.module.css';
import ProductImage from '../ProductImage/ProductImage';
import ProductInfo from '../ProductInfo/ProductInfo';
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn';
import type { Product } from '../../types';
import { useCartDispatch } from '../../hooks/useCartDispatch';
import { useCart } from '../../hooks/useCart';

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {

    const cart = useCart();
    const dispatch = useCartDispatch();

    const cartItem = cart.items.find(
        (item) => item.product.id === product.id
    );

    const quantity = cartItem?.quantity ?? 0;


    function handleAddToCart(count: number) {

        if (cart.items.some((item) => item.product.id === product.id)) {
            dispatch({ type: "UPDATE_ITEM", payload: {
                product: product,
                quantity: count
            } });
            return;
        }

        dispatch({ type: "ADD_ITEM", payload: {
            product: product,
            quantity: count
        } });
    }


    function handleRemoveFromCart(count: number) {

        if (count === 0) {
            dispatch({ type: "REMOVE_ITEM", payload: {
                product: product,
                quantity: count
            } });
            return;
        }

        dispatch({ type: "UPDATE_ITEM", payload: {
            product: product,
            quantity: count
        } });
    }
    

    return (
        <div className={styles.productCard}>
            <div className={quantity === 0 ? styles.imageBtnContainer : `${styles.imageBtnContainer} ${styles.inCart}`}>
                <ProductImage 
                    image={product['image']} 
                    name={product['name']} 
                    />
                <AddToCartBtn 
                    quantity={quantity}
                    handleAddToCart={handleAddToCart} 
                    handleRemoveFromCart={handleRemoveFromCart} 
                    />
            </div>
            <ProductInfo 
                name={product['name']} 
                category={product['category']} 
                price={product['price']} />
        </div>
    );
}

export default ProductCard;