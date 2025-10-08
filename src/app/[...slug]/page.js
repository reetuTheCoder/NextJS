const pageContent = {
  "home": {
    title: "Home",
    content: "Welcome to the home page."
  },
  "about": {
    title: "About Us",
    content: "This is the about page."
  },
  "getting-started": {
    title: "Getting Started",
    content: "Here is the getting started guide."
  },
  "api": {
    title: "API Reference",
    content: "Here is the API documentation."
  },
  "contact": {
    title: "Contact Us",
    content: "This is the contact page."
  }
};

export default async function DynamicPage({ params: paramsPromise }) {
  const params = await paramsPromise; 

  const slug = params.slug 
  const pageKey = slug[0]

  const page = pageContent[pageKey];

  if (!page) {
    return (
      <div style={{ padding: "2rem" }}>
        <h1>404</h1>
        <p>Page not found: {pageKey}</p>
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
