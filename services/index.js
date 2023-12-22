import { request, gql } from "graphql-request";

const graphAPI = process.env.NEXT_PUBLIC_BITBARD_ENDPOINTS;
export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  try {
    const result = await request(graphAPI, query);
    const posts = result.postsConnection.edges.map((edge) => {
      const { node } = edge;

      // Check and assign default values for photo and featuredImage
      const photo = node.author.photo?.url || "/default_photo_url.jpg";
      const featuredImage =
        node.featuredImage?.url || "/default_featured_image_url.jpg";

      return {
        ...node,
        author: {
          ...node.author,
          photo,
        },
        featuredImage,
      };
    });

    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return []; // Return an empty array or handle the error accordingly
  }
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        excerpt
        featuredImage {
          url
        }
        author {
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphAPI, query, { slug });
  return result.post;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails(){
      posts(
        orderBy: createdAt_ASC
        last: 3
      ){
        title
        featuredImage{
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphAPI, query);
  return result.posts;
};

export const getSimiliarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphAPI, query, { categories, slug });
  return result.posts;
};

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `;

  const result = await request(graphAPI, query);
  return result.categories;
};

// export const submitComment = async (obj) => {
//   const result = await fetch("/api/comments", {
//     method: "POST",
//     body: JSON.stringify(obj),
//   });

//   return result.json();
// };

export const submitComment = async (obj) => {
  const result = await fetch("/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  if (!result.ok) {
    throw new Error(`HTTP error! Status: ${result.status}`);
  }

  try {
    return await result.json();
  } catch (error) {
    console.error("Error parsing JSON response:", error);
    throw error;
  }
};

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphAPI, query, { slug });

  return result.comments;
};
