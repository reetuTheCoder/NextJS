"use client";
import Link from "next/link";
import { products } from "../shopCategories";
import { use } from "react";

const CategoryPage = ({ params: paramsPromise }) => {
  const { category } = use(paramsPromise);

  // Filter products by category
  const categoryProducts = products.filter((p) => p.category === category);

  if (categoryProducts.length === 0)
    return <p style={{ padding: "30px" }}>No products in this category.</p>;

  return (
    <div style={{ padding: "30px" }}>
      <h1>{category.toUpperCase()}</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {categoryProducts.map((product) => (
          <Link
            key={product.id}
            href={
              product.id === "prod4"
                ? `/shop/${category}/laptops` // MacBook goes to subcategory page
                : `/shop/${category}` // Other products stay on category page (or link to product details later)
            }
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

export default CategoryPage;
