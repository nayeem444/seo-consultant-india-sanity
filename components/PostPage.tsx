import { useState, useEffect } from 'react';
import Container from 'components/BlogContainer';
import BlogHeader from 'components/BlogHeader';
import Layout from 'components/BlogLayout';
import MoreStories from 'components/MoreStories';
import PostBody from 'components/PostBody';
import PostHeader from 'components/PostHeader';
import PostPageHead from 'components/PostPageHead';
import PostTitle from 'components/PostTitle';
import SectionSeparator from 'components/SectionSeparator';
import Footer from 'components/Footer';
import * as demo from '../lib/demo.data';
import type { Post, Settings } from 'lib/sanity.queries';
import { notFound } from 'next/navigation';
import { toPlainText } from '@portabletext/react';

export interface PostPageProps {
  preview?: boolean;
  loading?: boolean;
  post: Post;
  morePosts: Post[];
  settings: Settings;
}

const NO_POSTS: Post[] = [];

const useReadTime = (content: any[]) => {
  const [readTime, setReadTime] = useState(0);

  useEffect(() => {
    if (content && Array.isArray(content) && content.length > 0) {
      const wordsPerMinute = 250; // Adjust this value based on your desired reading speed
      const contentText = toPlainText(content);
      const contentWords = contentText.split(/\s+/).length;
      const calculatedReadTime = Math.ceil(contentWords / wordsPerMinute);
      setReadTime(calculatedReadTime);
    } else {
      setReadTime(1); // Set default read time to 1 minute if content is empty or not an array
    }
  }, [content]);

  return readTime;
};

export default function PostPage(props: PostPageProps) {
  const { preview, loading, morePosts = NO_POSTS, post, settings } = props;
  const { title = demo.title } = settings || {};
  const slug = post?.slug;
  if (!slug && !preview) {
    notFound();
  }

  const readTime = useReadTime(post?.content);

  return (
    <>
      <PostPageHead settings={settings} post={post} />
      <Layout preview={preview} loading={loading}>
        <Container>
          <BlogHeader title={title} level={2} />
          {preview && !post ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article>
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                  readTime={readTime} // Pass read time to PostHeader
                />
                <PostBody content={post.content} />
              </article>
              <SectionSeparator />
              {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
            </>
          )}
          <Footer />
        </Container>
      </Layout>
    </>
  );
}