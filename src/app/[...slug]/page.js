// src/app/[...slug]/page.js
const pages = {
  about: { title: "About Page", content: "This is the about page content." },
  contact: {
    title: "Contact Page",
    content: "This is the contact page content.",
  },
  "getting-started": {
    title: "Getting Started",
    content: "Welcome to getting started!",
  },
};

export default async function DynamicPage({ params: paramsPromise }) {
  const params = await paramsPromise;
  const slugArray = params.slug || [];
  
  const slugKey = slugArray.join("-");
  const page = pages[slugKey];

  if (!page) {
    return (
      <div style={{ padding: "2rem" }}>
        <h1>404</h1>
        <p>Page not found:{slugArray.join("/")}</p>
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
