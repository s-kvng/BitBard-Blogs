/* ********
*  Any file within the  folder pages/api is mapped /api/* and
will be treated as an API endpoint instead of a page
*/
import { GraphQLClient, gql } from "graphql-request";
import { NextResponse } from "next/server";

const graphqlAPI = process.env.NEXT_PUBLIC_BITBARD_ENDPOINTS;
const graphcms = process.env.GRAPHCMS_TOKEN;
export async function POST(request) {
  const res = await request.json();
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphcms}`,
    },
  });

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;

  try {
    const result = await graphQLClient.request(query, {
      name: res.name,
      email: res.email,
      comment: res.comment,
      slug: res.slug,
    });

    return NextResponse.json({ result }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, error: "An error occured" });
  }
}
