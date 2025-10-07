import React from "react";
import { products } from "./products";
import Link from "next/link";

const ShopPage = () => {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Shop All Products</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/shop/${product.category}/${product.subcategory}/${product.id}`}
            style={{
              textDecoration: "none",
              color: "inherit",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              transition: "0.3s",
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

export default ShopPage;
