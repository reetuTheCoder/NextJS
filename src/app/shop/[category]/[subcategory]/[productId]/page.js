import React from "react";
import { products } from "../../../products";

const ProductPage = ({ params }) => {
  console.log("params", params);

  const { category, subcategory, productId } = params;

  const product = products.find(
    (p) =>
      p.category === category &&
      p.subcategory === subcategory &&
      p.id === productId
  );

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <div>
        Shop → {category} → {subcategory} → {productId}
      </div>
      <h1>{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "400px", borderRadius: "10px" }}
      />
      <p>
        <strong>Brand:</strong> {product.brand}
      </p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>{product.description}</p>

      <h3>Specifications:</h3>
      <ul>
        {Object.entries(product.specs).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
