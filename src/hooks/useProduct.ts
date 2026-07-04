import { useEffect, useState } from "react";
import { getProduct } from "../services/api";
import { mapProduct } from "../utils/productMapper";
import type { Product } from "../types/product";

export default function useProduct(id: string) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProduct(id);
        setProduct(mapProduct(data));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  return {
    product,
    loading,
  };
}
