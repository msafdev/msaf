import { FetchPostResponse } from "@/lib/types/post";
import { FetchPersonResponse } from "@/lib/types/people";

import { GraphQLClient, gql } from "graphql-request";

const graphQLClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_GQL_ENDPOINT || "",
);

const getPosts = async () => {
  const query = gql`
    query FetchPost {
      postsConnection(where: { person: { name_contains: "Salman" } }) {
        edges {
          node {
            id
            title
            slug
            thumbnail {
              url
            }
            category
            createdAt
            content {
              html
            }
            person {
              name
              id
              avatar {
                url
              }
            }
          }
        }
      }
    }
  `;

  const response = await graphQLClient.request(query);

  return response as FetchPostResponse;
};

const getPostsCategory = async ({ category }: { category: string }) => {
  const query = gql`
    query FetchPost {
      postsConnection(where: { category_contains_some: ${category} }) {
        edges {
          node {
            id
            title
            slug
            thumbnail {
              url
            }
            category
            createdAt
            content {
              html
            }
            person {
              name
              id
              avatar {
                url
              }
            }
          }
        }
      }
    }
  `;

  const response = await graphQLClient.request(query);

  return response as FetchPostResponse;
};

const getHigherUps = async () => {
  const query = gql`
    query FetchPeople {
      peopleConnection(where: { category_contains_all: higher_up }) {
        edges {
          node {
            id
            name
            role
            bio
            category
            avatar {
              id
              url
            }
            posts {
              id
            }
          }
        }
      }
    }
  `;

  const response = await graphQLClient.request(query);

  return response as FetchPersonResponse;
};

export { getPosts, getPostsCategory, getHigherUps };
