import { useState, useEffect } from 'react';
import Link from 'next/link';
import DOMPurify from 'isomorphic-dompurify';

const WORDPRESS_API_URL = 'https://blog.shahidshahmiri.com//wp-json/wp/v2';

export default function BlogCarousel() {
  const [blogs, setBlogs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const visibleBlogs = 3;

  useEffect(() => {
    fetchRecentPosts();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + visibleBlogs >= blogs.length ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [blogs.length]);

  const fetchRecentPosts = async () => {
    try {
      const response = await fetch(
        `${WORDPRESS_API_URL}/posts?per_page=6&_embed`
      );
      if (!response.ok) throw new Error('Failed to fetch posts');
      const posts = await response.json();
      setBlogs(posts);
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative">
        <div className='flex justify-center'>
        <h2 className="text-4xl font-bold mb-8">Recent Blog Posts</h2>
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
                className="w-1/3 flex-shrink-0 px-3"
              >
                <article className="bg-[#3b3b3b] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    {/* Categories */}
                    <div className="flex flex-wrap gap-2 mb-3">
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
                    <h3 className="text-xl font-bold mb-3  line-clamp-2">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(post.title.rendered)
                        }}
                      />
                    </h3>

                    {/* Excerpt */}
                    <div 
                      className=" mb-4 line-clamp-3"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(post.excerpt.rendered)
                      }}
                    />

                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-sm ">
                      <div className="flex items-center">
                        <span>{post._embedded?.author?.[0]?.name}</span>
                      </div>
                      <span>{formatDate(post.date)}</span>
                    </div>

                    {/* Read More Link */}
                    <a
                      href={post.link}
                      className="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
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

        {/* Dots Navigation */}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: Math.ceil(blogs.length / visibleBlogs) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * visibleBlogs)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / visibleBlogs) === index
                  ? 'bg-blue-600 w-4'
                  : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}