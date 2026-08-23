import styles from './ProductList.module.css';
import products from '../../data/data.json';
import ProductCard from '../ProductCard/ProductCard';

function ProductList() {
  const productsWithIds = products.map((product) => ({
    ...product,
    id: `${product.name}-${product.category}`.toLowerCase().replace(/\s+/g, '-'),
    }));


  return (
    <div className={styles.productList}>
      {productsWithIds.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
