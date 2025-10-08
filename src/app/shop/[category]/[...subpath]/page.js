export default function ShopPage({ params }) {
  const { category, subpath } = params;

  return (
    <div>
      <h1>Shop: {category}</h1>
      <p>Subpath: {subpath?.join(' > ') || 'None'}</p>
    </div>
  );
}


// in the [...subpath] 
// you can added nested lavel route end less route
// like - http://localhost:3000/shop/electronics/laptops/macbook/macbook-pro/macbook-pro11
// shop - first route
// electronics - category route
// subpath - laptops route
// subpath - macbook route
// subpath - macbook-pro/ route
// subpath - macbook-pro11 route
// you can clearly see how many routes we have create in the  [...subpath]  so it avoid nested folders