import { useContext } from "react";
import { CartDispatchContext } from "../CartContext";

export function useCartDispatch() {
  const dispatch = useContext(CartDispatchContext);
  if (!dispatch) {
    throw new Error("useCartDispatch must be used within a CartProvider");
  }
  return dispatch;
}