// src/app/[slug]/page.js
const pages = {
  about: { title: "About Page", content: "This is the about page content." },
  contact: { title: "Contact Page", content: "This is the contact page content." },
};

export default async function DynamicPage({ params }) {
  // params.slug is an array if you use [...slug]
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const page = pages[slug];

  if (!page) {
    return (
      <div style={{ padding: "2rem" }}>
        <h1>404</h1>
        <p>Page not found: {slug}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{page.title}</h1>
      <p>{page.content}</p>
    </div>
  );
}
