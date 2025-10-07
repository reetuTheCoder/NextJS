"use client";
import { use } from "react";
import { macbookProducts } from "../../../shopCategories";

const ProductDetailsPage = ({ params: paramsPromise }) => {
  const { category, subcategory, productId } = use(paramsPromise);

  const product = macbookProducts.find((p) => p.id === productId);

  if (!product) return <p style={{ padding: "30px" }}>Product not found.</p>;

  return (
    <div style={{ padding: "30px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>{product.name}</h1>

      <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "300px", borderRadius: "10px" }}
        />

        {/* Product Info */}
        <div style={{ flex: 1, minWidth: "250px" }}>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Subcategory:</strong> {product.subcategory}
          </p>
          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            ${product.price}
          </p>

          <button
            style={{
              padding: "10px 20px",
              marginTop: "15px",
              backgroundColor: "#0070f3",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Add to Cart
          </button>

          {/* Features */}
         <div style={{ marginTop: "20px" }}>
  <h3>Features:</h3>
  <ul>
    {product.features.map((feature, index) => (
      <li key={index}>{feature}</li>
    ))}
  </ul>
</div>

          {/* Specifications */}
       {/* Specifications */}
<div style={{ marginTop: "20px" }}>
  <h3>Specifications:</h3>
  <table style={{ width: "100%", borderCollapse: "collapse" }}>
    <tbody>
      {Object.entries(product.specifications).map(([key, value]) => (
        <tr key={key}>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>{key}</td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>{value}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


          {/* Description */}
          <div style={{ marginTop: "20px" }}>
            <h3>Description:</h3>
            <p>
              The {product.name} combines high performance with portability.
              Designed for professionals and creatives, it delivers exceptional
              speed, graphics, and battery life. Perfect for work, design, and
              entertainment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
