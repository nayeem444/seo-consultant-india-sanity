import PostPreview from 'components/PostPreview';
import type { Post } from 'lib/sanity.queries';

export default function MoreStories({ posts }: { posts: Post[] }) {
  return (
    <section className='lg:mx-24'>
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:grid-cols-2 md:gap-x-16 lg:gap-x-32 md:gap-y-32 font-montserrat">
        {posts.map((post) => {
          // Calculate read time for each post
          let readTime = 0; // Default read time
          if (post?.content && Array.isArray(post.content)) {
            const wordsPerMinute = 200; // Average words per minute
            
            // Extract text from each block of content and join them into a single string
            const contentText = post.content.map(block => block.text).join(' ');
            
            // Calculate read time based on the combined text content
            const contentWords = contentText.split(/\s+/).length;
            readTime = Math.ceil(contentWords / wordsPerMinute);
          }

          return (
            <PostPreview
              key={post._id}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              readTime={readTime} // Pass calculated read time to PostPreview
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          );
        })}
      </div>
    </section>
  );
}
