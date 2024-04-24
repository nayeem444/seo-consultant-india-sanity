/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */
import {
  PortableText,
  type PortableTextReactComponents,
} from '@portabletext/react'

import styles from './PostBody.module.css'
import { SanityImage } from './SanityImage'


const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => {
      return <SanityImage {...value} />
    },
  },
}

export default function PostBody({ content }) {
  return (
    <div className=" flex flex-col md:flex-row"> {/* Flex container */}
      {/* Left column (main content) */}
      <div className=" mx-4 md:mx-24 max-w-full md:max-w-4xl mb-8 md:mb-0"> {/* Apply margin and max width */}
        <div className={`${styles.portableText}`}> {/* Content */}
          <PortableText value={content} components={myPortableTextComponents} />
        </div>
      </div>
      
      {/* Right column (side content) */}
      <div className="mx-4 md:mx-0 mt-4 md:mt-0 md:w-72"> {/* Apply margin and width */}
        <div className="sticky top-4 rounded h-96 bg-blue-600 p-6 flex flex-col justify-center items-center"> {/* Side content */}
          <h1 className="text-white text-3xl font-bold mb-4 text-center">Let Us Handle Your SEO and Marketing</h1>
          <a 
           href="/contact"
            className=" text-black bg-white hover:bg-white-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
          >
            Book A Free Call
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

