// src/app/shop/page.js
import { shopCategories } from "./shopCategories";
import Link from "next/link";

export default function ShopPage() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Shop Categories</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {shopCategories.map((category) => (
          <Link
            key={category.id}
            href={`/shop/${category.id}`}
            style={{
              textDecoration: "none",
              color: "inherit",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
            }}
          >
            <h2>{category.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
