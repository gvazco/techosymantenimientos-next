import { ProductCard } from "./ProductCard";

export const Results = ({ products }) => {
  return (
    <div className="max-w-5xl lg:mx-auto mx-2 grid grid-cols-1 gap-5 mb-10 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.databaseId}
          title={product.title}
          destination={product.uri}
          precio={product.productFeatures.description.precio}
          description={product.productFeatures.description}
          type={product.productFeatures}
          image={product.featuredImage?.node?.sourceUrl}
        />
      ))}
    </div>
  );
};
