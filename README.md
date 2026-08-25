# Product list with cart

A responsive dessert shopping interface built as a solution to the [Frontend Mentor Product list with cart challenge](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d).

The app lets users browse a dessert menu, add products to a cart, adjust quantities, remove products, review the order total, and confirm or reset an order.

## The challenge

Users should be able to:

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

## Built with

- React 19
- TypeScript
- Vite
- CSS Modules
- React Context and `useReducer` for cart state
- `@fontsource-variable/red-hat-text` for typography
- pnpm for package management


## State management

Cart state is provided at the application root by `CartProvider`. Components read the current cart through `useCart()` and dispatch actions through `useCartDispatch()`.

The reducer handles:

- `ADD_ITEM` for adding a new product
- `UPDATE_ITEM` for changing a product quantity
- `REMOVE_ITEM` for removing a product completely
- `CLEAR_CART` for starting a new order

The cart is the single source of truth for product quantities, so product-card controls update automatically when a cart item is removed elsewhere in the interface.

## Styling

The interface uses CSS Modules so component styles stay locally scoped and do not leak into other parts of the application. Stylesheets use the `*.module.css` naming convention and are imported as a `styles` object:

```tsx
import styles from './ProductCard.module.css';

function ProductCard() {
	return <div className={styles.productCard}>...</div>;
}
```

Each reusable component keeps its stylesheet beside its implementation, for example `ProductCard/ProductCard.tsx` and `ProductCard/ProductCard.module.css`. Global design tokens, typography, and base styles are defined in `src/index.css`, while layout and component-specific presentation live in their corresponding CSS Modules.

## Data and assets

Product metadata is stored in [`src/data/data.json`](src/data/data.json). Images and interface icons are served from [`public/assets/images`](public/assets/images).

## Links

- Solution URL: [product-list-with-cart](https://github.com/ashkir004/product-with-list-cart)
- Live Site URL: [product-list-w-cart](https://product-list-w-cart.netlify.app/)

## Author

- Frontend Mentor - [@ashkir004](https://www.frontendmentor.io/profile/ashkir004)


