// lib/api.js

import { gql } from '@apollo/client';
import client from './apollo';

export const GET_ALL_POST_SLUGS = gql`
  query GetAllPostSlugs {
    posts {
      nodes {
        slug
      }
    }
  }
`;

export async function getAllPostsSlugs() {
  const { data } = await client.query({
    query: GET_ALL_POST_SLUGS,
  });
  
  return data.posts.nodes.map((node) => node.slug);
}
