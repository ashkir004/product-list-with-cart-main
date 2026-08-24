
import { createContext } from "react";
import type { CartItem } from "./types";

type Cart = {
  items: CartItem[];
};

type CartAction = {
  type: "ADD_ITEM" | "REMOVE_ITEM" | "UPDATE_ITEM" | "CLEAR_CART";
  payload: CartItem;
};

export const initialState: Cart = {
  items: [],
};


export const CartContext = createContext<Cart | null>(null);
export const CartDispatchContext = createContext<React.Dispatch<CartAction> | null>(null);



export function cartReducer(cart: Cart, action: CartAction) {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...cart,
                items: [...cart.items, action.payload],
            };
        case "REMOVE_ITEM":
            return {
                ...cart,
                items: cart.items.filter((item: CartItem) => item.product.id !== action.payload.product.id),
            };
        case "UPDATE_ITEM":
            return {
                ...cart,
                items: cart.items.map((item: CartItem) => {
                    if (item.product.id === action.payload.product.id) {
                        return {
                            ...item,
                            quantity: action.payload.quantity,
                        };
                    }
                    return item;
                }),
            };
        case "CLEAR_CART":
            return {
                ...cart,
                items: [],            
              };
        default:
            throw new Error(`Unknown action: ${action.type}`);
      }
}



