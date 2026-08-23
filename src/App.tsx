import '@fontsource-variable/red-hat-text';
import styles from './App.module.css';
import ProductList from './components/ProductList/ProductList';
import ProductCart from './components/ProductCart/ProductCart';

function App() {
  return (
  <main className={styles.app}>
    <h1 className={styles.title}>Desserts</h1>
    <section className={styles.productListWithCart}>
      <ProductList />
      <ProductCart />
    </section>
  </main>
  );
}

export default App
