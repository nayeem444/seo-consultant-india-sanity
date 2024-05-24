import { gql } from '@apollo/client';

export const CREATE_COMMENT = gql`
mutation CREATE_COMMENT($content: String!, $commentOn: Int!, $author: String!) {
  createComment(input: { commentOn: $commentOn, content: $content, author: $author }) {
    success
    comment {
      id
      content
      author {
        node {
          name
        }
      }
    }
  }
}

`;
