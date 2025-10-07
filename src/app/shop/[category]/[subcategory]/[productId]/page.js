import React from "react";

const ProductPage = ({ params }) => {
  console.log("params", params);

  const { category, subcategory, productId } = params;

  return (
    <div>
      <div>
        Shop → {category} → {subcategory} → {productId}
      </div>
      <h1>Product: {productId}</h1>
      <p>Category: {category}</p>
      <p>Subcategory: {subcategory}</p>
    </div>
  );
};

export default ProductPage;
