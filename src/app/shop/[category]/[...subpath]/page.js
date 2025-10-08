export default function ShopPage({ params }) {
  const { category, subpath } = params;

  return (
    <div>
      <h1>Shop: {category}</h1>
      <p>Subpath: {subpath?.join(' > ') || 'None'}</p>
    </div>
  );
}
