// app/rendering/static/page.js
export default async function StaticPage() {
  const time = new Date().toISOString();

  return (
    <div>
      <h1>🧊 Static Page</h1>
      <p>Generated at build time222: {time}</p>
    </div>
  );
}
