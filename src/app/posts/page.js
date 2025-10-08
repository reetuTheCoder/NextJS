export const revalidate = 60; // Rebuild every 60 seconds

export default async function PostsPage() {
  console.log('Rendering posts page'); // Only runs at build/revalidate

  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const posts = await res.json();

  return (
    <div>
      <h1>Static Blog Posts11111</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
      <small>Rendered statically (build or revalidate)</small>
    </div>
  );
}