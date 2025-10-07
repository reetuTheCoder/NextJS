function BlogPost({ params }) {
  const { category, slug } = params;
  
  return (
    <article>
      <nav>
        <a href="/blog">Blog</a> → 
        <a href={`/blog/${category}`}>{category}</a> → 
        {slug}
      </nav>
      <h1>{slug.replace(/-/g, ' ')}</h1>
      <p>Category: {category}</p>
    </article>
  )
}

export default BlogPost;