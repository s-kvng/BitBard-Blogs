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
  const result = await request(graphAPI, query);

  return result.postsConnection.edges;
};
