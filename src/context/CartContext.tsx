import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CartItem } from "../types/product";

interface CartContextType {
  cart: CartItem[];

  addToCart: (item: CartItem) => void;

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
    setCart((prev) => {
      const existing = prev.find(
        (cartItem) =>
          cartItem.productId === item.productId &&
          cartItem.variantId === item.variantId,
      );

      if (existing) {
        return prev.map((cartItem) =>
          cartItem.productId === item.productId &&
          cartItem.variantId === item.variantId
            ? {
                ...cartItem,
                quantity: cartItem.quantity + item.quantity,
              }
            : cartItem,
        );
      }

      return [...prev, item];
    });
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
      prev.map((item) =>
        item.productId === productId && item.variantId === variantId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
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
