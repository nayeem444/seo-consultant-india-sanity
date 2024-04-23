import type { Post } from 'lib/sanity.queries'
import Navbar from './Navbar'

export default function HeroPost(
  props: Pick<
    Post,
    'title' | 'coverImage' | 'date' | 'excerpt' | 'author' | 'slug'
  >,
) {
  const { title, coverImage, date, excerpt, author, slug } = props
  return (
    <>
    <Navbar/>
    <section className="mb-8 md:mb-16 flex justify-center h-64  items-center bg-blue-600">
      <div >
      <h1 className='flex justify-center align-middle text-7xl text-white font-bold font-montserrat'  >Blog</h1>
      </div>
    
    </section>
    </>
  )
}
