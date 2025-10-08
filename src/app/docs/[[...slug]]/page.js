// app/docs/[[...slug]]/page.js
export default function DocsPage({ params }) {
  const slug = params.slug || [];
  
  if (slug.length === 0) {
    // User visited /docs
    return (
      <div>
        <h1>Documentation Home</h1>
        <p>Welcome to our docs!</p>
        <ul>
          <li><a href="/docs/getting-started">Getting Started</a></li>
          <li><a href="/docs/api">API Reference</a></li>
        </ul>
      </div>
    );
  }
  
  // User visited something like /docs/getting-started or /docs/api/auth
  return (
    <div>
      <h1>Documentation</h1>
      <p>Showing docs for: {slug.join('/')}</p>
    </div>
  );
}