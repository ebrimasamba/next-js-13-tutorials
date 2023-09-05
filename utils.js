export const fetchGraphQL = async (query) => {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
};

export const fetchData = async (entryID) => {
  const response = await fetch(
    `https://64f1bd810e1e60602d2436ba.mockapi.io/api/`
  );
  return await response.json();
};
