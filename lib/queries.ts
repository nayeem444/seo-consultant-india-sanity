import { gql } from '@apollo/client';

export const GET_LATEST_POSTS = gql`
  query GetLatestPosts($first: Int, $after: String) {
    posts(first: $first, after: $after) {
      edges {
        node {
          id
          title
          excerpt
          date
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
          author {
            node {
              name
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;


export const GET_FULL_POST = gql`
  query GetFullPost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      author {
        node {
          id
          name
          avatar {
            url
          }
        }
      }
      categories {
        edges {
          node {
            id
            name
          }
        }
      }
      comments {
        edges {
          node {
            id
            content
            date
            author {
              node {
                name
                avatar {
                  url
                }
              }
            }
          }
        }
      }
      databaseId
      date
      excerpt
      featuredImage {
        node {
          id
          sourceUrl
        }
      }
      
      slug
      uri
      content
      title
    }
  }
`;