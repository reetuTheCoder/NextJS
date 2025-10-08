// src/app/[[...slug]]/page.js
const pages = {
  about: { title: "About Page", content: "This is the about page content." },
  contact: { title: "Contact Page", content: "This is the contact page content." },
  "getting-started": { title: "Getting Started", content: "Welcome to getting started!" },
  home: { title: "Home Page", content: "Welcome to the home page!" },
};

export default async function OptionalCatchAllPage({ params: paramsPromise }) {
  const params = await paramsPromise;
  const slugArray = params.slug || [];

  const slugKey = slugArray.length === 0 ? "home" : slugArray.join("-");
  const page = pages[slugKey];

  if (!page) {
    return (
      <div style={{ padding: "2rem" }}>
        <h1>404</h1>
        <p>Page not found: {slugArray.join("/")}</p>
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
