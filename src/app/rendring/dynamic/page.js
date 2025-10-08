export default async function DynamicPage() {
  const time = new Date().toISOString();

  // Force dynamic rendering
  await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  return (
    <div>
      <h1>🔥 Dynamic Page</h1>
      <p>Generated at: {time}</p>
      <p>New HTML rendered on every request 222</p>
    </div>
  );
}
