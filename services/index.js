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
    console.log(posts);
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return []; // Return an empty array or handle the error accordingly
  }
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

export const getSimiliarPosts = async () => {
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
};
