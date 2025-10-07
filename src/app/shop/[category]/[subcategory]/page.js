"use client";
import { use } from "react";
import Link from "next/link";
import { macbookProducts } from "../../shopCategories";

const SubcategoryPage = ({ params: paramsPromise }) => {
  const { category, subcategory } = use(paramsPromise);

  const filteredProducts =
    subcategory === "laptops" ? macbookProducts : [];

  if (filteredProducts.length === 0)
    return <p style={{ padding: "30px" }}>No products in this subcategory.</p>;

  return (
    <div style={{ padding: "30px" }}>
      <h1>{subcategory.toUpperCase()}</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            href={`/shop/${category}/${subcategory}/${product.id}?color=silver&storage=512GB`}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubcategoryPage;
