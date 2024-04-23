import PostPreview from 'components/PostPreview';
import type { Post } from 'lib/sanity.queries';

export default function MoreStories({ posts }: { posts: Post[] }) {
  return (
    <section className='lg:mx-24 font-montserrat'>
   
      {/* Updated grid layout for two rows of three columns */}
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:grid-cols-2 md:gap-x-16 lg:gap-x-32 md:gap-y-32 font-montserrat">
        {posts.map((post) => (
          <PostPreview
            key={post._id}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
