export interface ApiProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ProductImage {
  id: number;
  url: string;
}

export interface Variant {
  id: string;
  color: string;
  colorCode: string;
  size: "S" | "M" | "L" | "XL";
  stock: number;
}

export interface Product extends ApiProduct {
  brand: string;
  originalPrice: number;
  images: ProductImage[];
  variants: Variant[];
}
export interface CartItem {
  productId: number;
  variantId: string;
  title: string;
  image: string;
  price: number;
  color: string;
  size: string;
  quantity: number;
  stock: number;
}
