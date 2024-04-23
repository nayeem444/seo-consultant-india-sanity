import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import PostTitle from 'components/PostTitle'
import type { Post } from 'lib/sanity.queries'

export default function PostHeader(
  props: Pick<Post, 'title' | 'coverImage' | 'date' | 'author' | 'slug'>,
) {
  const { title, coverImage, date, author, slug } = props;

  return (
    <>
     <div className='h-60  bg-blue-600 flex justify-center items-center'>
     <PostTitle>{title}</PostTitle>
      </div> 
      <div className="hidden md:mb-12 md:flex justify-center mx-24">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
      {coverImage && ( // Check if coverImage is present
        <div className="mb-8 sm:mx-0 md:mb-16">
          <CoverImage title={title} image={coverImage} priority slug={slug} />
        </div>
      )}
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 block md:hidden">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
        {/* <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div> */}
      </div>
    </>
  );
}

