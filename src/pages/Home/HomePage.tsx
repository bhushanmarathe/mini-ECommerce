import ProductGrid from "../../components/ProductGrid/ProductGrid";
import ProductCardSkeleton from "../../components/Skeleton/ProductCardSkeleton";
import useProducts from "../../hooks/useProducts";

export default function HomePage() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
          gap: "2rem",
          padding: "2rem",
        }}
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) return <h2>{error}</h2>;

  return <ProductGrid products={products} />;
}
