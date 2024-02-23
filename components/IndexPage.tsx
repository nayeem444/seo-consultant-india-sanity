import React, { useState } from 'react';
import Container from 'components/BlogContainer';
import Layout from 'components/BlogLayout';
import MoreStories from 'components/MoreStories';
import type { Post, Settings } from 'lib/sanity.queries';
import HeroPost from './HeroPost';

export interface IndexPageProps {
  preview?: boolean;
  loading?: boolean;
  posts: Post[];
  settings: Settings;
}

const POSTS_PER_PAGE = 6; // Adjust this to fit your layout needs

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings } = props;
  const [currentPage, setCurrentPage] = useState(0);

  // Calculate the paginated posts
  const paginatedPosts = posts.slice(
    currentPage * POSTS_PER_PAGE,
    (currentPage + 1) * POSTS_PER_PAGE
  );

  // Calculate the total number of pages
  const pageCount = Math.ceil(posts.length / POSTS_PER_PAGE);

  return (
    <>
<HeroPost/>
      <Layout preview={preview} loading={loading}>
        <Container>
          {/* Display all posts using MoreStories component */}
          {posts.length > 0 && <MoreStories posts={paginatedPosts} />}

          {/* Pagination Controls */}
          <div className="pagination">
            {Array.from({ length: pageCount }, (_, i) => (
              <button key={i} onClick={() => setCurrentPage(i)}>
                {i + 1}
              </button>
            ))}
          </div>
        </Container>
      </Layout>
    </>
  );
}
