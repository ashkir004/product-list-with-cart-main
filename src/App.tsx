import '@fontsource-variable/red-hat-text';
import styles from './App.module.css';
import ProductList from './components/ProductList/ProductList';
import ProductCart from './components/ProductCart/ProductCart';
import { CartProvider } from './components/CartProvider';

function App() {
    return (
      <CartProvider>
        <main className={styles.app}>
          <h1 className={styles.title}>Desserts</h1>
          <section className={styles.productListWithCart}>
            <ProductList />
            <ProductCart />
          </section>
        </main>
      </CartProvider>
    );
  }

export default App
