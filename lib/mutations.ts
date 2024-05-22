import { gql } from '@apollo/client';

export const CREATE_COMMENT = gql`
  mutation CreateComment(
    $author: String!
    $content: String!
    $postId: ID!
  ) {
    createComment(
      input: {
        author: $author
        content: $content
        commentOn: $postId
      }
    ) {
      success
      comment {
        id
        content
        author {
          node {
            name
          }
        }
        date
      }
    }
  }
`;


const GET_COMMENTS_QUERY = `
query GetComments($postId: ID!) {
  comments(where: { contentId: $postId }) {
    edges {
      node {
        id
        content
        date
        author {
          node {
            name
          }
        }
      }
    }
  }
}
`;

const variables = {
postId: "123"  // Replace with the actual post ID
};
