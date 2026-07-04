import axios from "axios";
import type { ApiProduct } from "../types/product";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export async function getProducts(): Promise<ApiProduct[]> {
  const { data } = await api.get("/products");
  return data;
}

export async function getProduct(id: string): Promise<ApiProduct> {
  const { data } = await api.get(`/products/${id}`);
  return data;
}
