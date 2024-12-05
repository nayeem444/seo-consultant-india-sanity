// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import DOMPurify from 'isomorphic-dompurify';

// const WORDPRESS_API_URL = 'https://blog.shahidshahmiri.com//wp-json/wp/v2';

// export default function BlogCarousel() {
//   const [blogs, setBlogs] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const visibleBlogs = 3;

//   useEffect(() => {
//     fetchRecentPosts();
//   }, []);

//   // Auto-slide functionality
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex + visibleBlogs >= blogs.length ? 0 : prevIndex + 1
//       );
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(timer);
//   }, [blogs.length]);

//   const fetchRecentPosts = async () => {
//     try {
//       const response = await fetch(
//         `${WORDPRESS_API_URL}/posts?per_page=6&_embed`
//       );
//       if (!response.ok) throw new Error('Failed to fetch posts');
//       const posts = await response.json();
//       setBlogs(posts);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Format date
//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center text-red-600 p-4">
//         Error loading blog posts: {error}
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <div className="relative">
//         <div className='flex justify-center'>
//         <h2 className="text-4xl font-bold mb-8">Recent Blog Posts</h2>
//         </div>
        

//         {/* Carousel Container */}
//         <div className="relative overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${(currentIndex * (100 / visibleBlogs))}%)`,
//             }}
//           >
//             {blogs.map((post) => (
//               <div
//                 key={post.id}
//                 className="w-1/3 flex-shrink-0 px-3"
//               >
//                 <article className="bg-[#3b3b3b] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//                   <div className="p-6">
//                     {/* Categories */}
//                     <div className="flex flex-wrap gap-2 mb-3">
//                       {post._embedded?.['wp:term']?.[0]?.map((category) => (
//                         <span
//                           key={category.id}
//                           className="text-xs font-semibold bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
//                         >
//                           {category.name}
//                         </span>
//                       ))}
//                     </div>

//                     {/* Title */}
//                     <h3 className="text-xl font-bold mb-3  line-clamp-2">
//                       <div
//                         dangerouslySetInnerHTML={{
//                           __html: DOMPurify.sanitize(post.title.rendered)
//                         }}
//                       />
//                     </h3>

//                     {/* Excerpt */}
//                     <div 
//                       className=" mb-4 line-clamp-3"
//                       dangerouslySetInnerHTML={{
//                         __html: DOMPurify.sanitize(post.excerpt.rendered)
//                       }}
//                     />

//                     {/* Meta Information */}
//                     <div className="flex items-center justify-between text-sm ">
//                       <div className="flex items-center">
//                         <span>{post._embedded?.author?.[0]?.name}</span>
//                       </div>
//                       <span>{formatDate(post.date)}</span>
//                     </div>

//                     {/* Read More Link */}
//                     <a
//                       href={post.link}
//                       className="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Read More
//                       <svg
//                         className="w-4 h-4 ml-2"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M9 5l7 7-7 7"
//                         />
//                       </svg>
//                     </a>
//                   </div>
//                 </article>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Dots Navigation */}
//         <div className="flex justify-center mt-4 gap-2">
//           {Array.from({ length: Math.ceil(blogs.length / visibleBlogs) }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index * visibleBlogs)}
//               className={`h-2 w-2 rounded-full transition-all duration-300 ${
//                 Math.floor(currentIndex / visibleBlogs) === index
//                   ? 'bg-blue-600 w-4'
//                   : 'bg-gray-300'
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }





import { useState, useEffect } from 'react';
import Link from 'next/link';
import DOMPurify from 'isomorphic-dompurify';

const WORDPRESS_API_URL = 'https://blog.shahidshahmiri.com//wp-json/wp/v2';

export default function BlogCarousel() {
  const [blogs, setBlogs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleBlogs, setVisibleBlogs] = useState(3);

  // Handle responsive visible blogs
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleBlogs(1);
      } else if (window.innerWidth < 1024) {
        setVisibleBlogs(2);
      } else {
        setVisibleBlogs(3);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    fetchRecentPosts();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + visibleBlogs >= blogs.length ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [blogs.length, visibleBlogs]);

  // const fetchRecentPosts = async () => {
  //   try {
  //     const response = await fetch(
  //       `${WORDPRESS_API_URL}/posts?per_page=6&_embed`
  //     );
  //     if (!response.ok) throw new Error('Failed to fetch posts');
  //     const posts = await response.json();
  //     setBlogs(posts);
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  const fetchRecentPosts = async () => {
    try {
      const response = await fetch(
        `${WORDPRESS_API_URL}/posts?per_page=6&_embed`
      );
      if (!response.ok) throw new Error('Failed to fetch posts');
      const posts = await response.json();
  
      // Filter out posts from October 7, 2024
      const filteredPosts = posts.filter(post => {
        const postDate = new Date(post.date);
        return !(postDate.getFullYear() === 2024 && 
                 postDate.getMonth() === 9 && // JavaScript months are 0-based
                 postDate.getDate() === 7);
      });
  
      setBlogs(filteredPosts);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        Error loading blog posts: {error}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
      <div className="relative">
        <div className="flex justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
            Recent Blog Posts
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * (100 / visibleBlogs))}%)`,
            }}
          >
            {blogs.map((post) => (
              <div
                key={post.id}
                className={`w-full ${
                  visibleBlogs === 3 ? 'md:w-1/3' : 
                  visibleBlogs === 2 ? 'sm:w-1/2' : 'w-full'
                } flex-shrink-0 px-2 sm:px-3`}
              >
                <article className="bg-[#3b3b3b] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="p-4 sm:p-6">
                    {/* Categories */}
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
                      {post._embedded?.['wp:term']?.[0]?.map((category) => (
                        <span
                          key={category.id}
                          className="text-xs font-semibold bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
                        >
                          {category.name}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 line-clamp-2">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(post.title.rendered)
                        }}
                      />
                    </h3>

                    {/* Excerpt */}
                    <div 
                      className="text-sm sm:text-base mb-3 sm:mb-4 line-clamp-3"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(post.excerpt.rendered)
                      }}
                    />

                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <div className="flex items-center">
                        <span>{post._embedded?.author?.[0]?.name}</span>
                      </div>
                      <span>{formatDate(post.date)}</span>
                    </div>

                    {/* Read More Link */}
                    <a
                      href={post.link}
                      className="mt-3 sm:mt-4 inline-flex items-center text-blue-400 hover:text-blue-300 text-sm sm:text-base"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-3 sm:mt-4 gap-1 sm:gap-2">
          {Array.from({ length: Math.ceil(blogs.length / visibleBlogs) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * visibleBlogs)}
              className={`h-1.5 sm:h-2 transition-all duration-300 rounded-full ${
                Math.floor(currentIndex / visibleBlogs) === index
                  ? 'bg-blue-600 w-3 sm:w-4'
                  : 'bg-gray-300 w-1.5 sm:w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}