import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

// import toast from "react-hot-toast";

import type { CartItem } from "../types/product";

interface CartContextType {
  cart: CartItem[];

  addToCart: (item: CartItem) => {
    success: boolean;
    message: string;
  };

  removeFromCart: (productId: number, variantId: string) => void;

  increaseQuantity: (productId: number, variantId: string) => void;

  decreaseQuantity: (productId: number, variantId: string) => void;

  clearCart: () => void;

  totalItems: number;

  totalPrice: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("cart");

    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item: CartItem) {
    const existing = cart.find(
      (cartItem) =>
        cartItem.productId === item.productId &&
        cartItem.variantId === item.variantId,
    );

    if (existing) {
      const newQuantity = existing.quantity + item.quantity;

      if (newQuantity > existing.stock) {
        return {
          success: false,
          message: `Only ${existing.stock} item(s) available.`,
        };
      }

      setCart((prev) =>
        prev.map((cartItem) =>
          cartItem.productId === item.productId &&
          cartItem.variantId === item.variantId
            ? {
                ...cartItem,
                quantity: newQuantity,
              }
            : cartItem,
        ),
      );

      return {
        success: true,
        message: "Added to cart",
      };
    }

    if (item.quantity > item.stock) {
      return {
        success: false,
        message: `Only ${item.stock} item(s) available.`,
      };
    }

    setCart((prev) => [...prev, item]);

    return {
      success: true,
      message: "Added to cart",
    };
  }

  function removeFromCart(productId: number, variantId: string) {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(item.productId === productId && item.variantId === variantId),
      ),
    );
  }

  function increaseQuantity(productId: number, variantId: string) {
    setCart((prev) =>
      prev.map((item) => {
        if (item.productId === productId && item.variantId === variantId) {
          if (item.quantity >= item.stock) {
            return item;
          }

          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      }),
    );
  }

  function decreaseQuantity(productId: number, variantId: string) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.productId === productId && item.variantId === variantId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function clearCart() {
    setCart([]);
  }

  const totalItems = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart],
  );

  const totalPrice = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart],
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
