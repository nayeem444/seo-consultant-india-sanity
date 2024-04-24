import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

interface PostPreviewProps extends Omit<Post, '_id'> {
  readTime: number; // Add readTime prop
}

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  readTime, // Include readTime prop
}: PostPreviewProps) {
  return (
    <div className="p-4 md:p-0 md:flex md:flex-col  "> {/* Flex container */}
      {coverImage && (
        <div className="mb-5">
          <CoverImage
            slug={slug}
            title={title}
            image={coverImage}
            priority={false}
          />
        </div>
      )}
      <h3 className="  mb-3 text-2xl md:text-3xl font-bold text-blue-600 leading-tight text-balance"> {/* Adjust text size for mobile */}
        <Link href={`/blog/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-2 text-sm text-gray-500"> {/* Date and Read Time */}
        {/* <Date dateString={date} /> */}
        {/* <span className="ml-2">Read Time: {readTime} min</span>  */}
      </div>
      {excerpt && (
        <p className=" mb-2 text-sm md:text-lg leading-relaxed text-gray-700">{excerpt}</p> 
      )}
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  );
}
