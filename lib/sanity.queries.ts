import { groq } from 'next-sanity';

const postFields = groq`
  _id,
  title,
  date,
  _updatedAt,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
  content[] {
    ...,
    markDefs[] {
      ...,
      _type == "link" => {
        ...,
        nofollow,
        blank
      }
    }
  }
`;

export const settingsQuery = groq`*[_type == "settings"][0]`;

export const indexQuery = groq`
  *[_type == "post"] | order(date desc, _updatedAt desc) {
    ${postFields}
  }
`;

export const postAndMoreStoriesQuery = groq`
  {
    "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
      ${postFields}
    },
    "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
      ${postFields}
    }
  }
`;

export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)][]._id
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    ${postFields}
  }
`;

export interface Author {
  name?: string;
  picture?: any;
}

export interface Link {
  _type: 'link';
  href?: string;
  nofollow?: boolean;
  blank?: boolean;
}

export interface Post {
  _id: string;
  title?: string;
  coverImage?: any;
  date?: string;
  _updatedAt?: string;
  excerpt?: string;
  author?: Author;
  slug?: string;
  content?: Array<{
    _type: string;
    markDefs?: Link[];
    [key: string]: any;
  }>;
}

export interface Settings {
  title?: string;
  description?: any[];
  ogImage?: {
    title?: string;
  };
}