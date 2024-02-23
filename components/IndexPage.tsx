import React, { useState } from 'react';
import Container from 'components/BlogContainer';
import Layout from 'components/BlogLayout';
import HeroPost from 'components/HeroPost';
import MoreStories from 'components/MoreStories';
import type { Post, Settings } from 'lib/sanity.queries';

export interface IndexPageProps {
  preview?: boolean;
  loading?: boolean;
  posts: Post[];
  settings: Settings;
}

const POSTS_PER_PAGE = 6; // 6 posts per page to fit two rows of three

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings } = props;
  const [currentPage, setCurrentPage] = useState(0);

  // Splitting the hero post from the rest
  const [heroPost, ...morePosts] = posts || [];

  // Calculate the paginated posts
  const paginatedPosts = morePosts.slice(
    currentPage * POSTS_PER_PAGE,
    (currentPage + 1) * POSTS_PER_PAGE
  );

  // Calculate the total number of pages
  const pageCount = Math.ceil(morePosts.length / POSTS_PER_PAGE);

  return (
    <>
      <Layout preview={preview} loading={loading}>
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={paginatedPosts} />}

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
