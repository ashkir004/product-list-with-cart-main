
import { useReducer } from "react";
import { CartContext, CartDispatchContext, cartReducer, initialState } from "../CartContext";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext value={cart}>
      <CartDispatchContext value={dispatch}>
        {children}
      </CartDispatchContext>
    </CartContext>
  );
}