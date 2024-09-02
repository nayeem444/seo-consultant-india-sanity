

import React from 'react';
import { PageContent } from '../types/content';
import { decodeHtml } from '../utils/htmlDecoder';
import Navbar from './Navbar2';
import Footer2 from './Footer2';


interface PageTemplateProps {
  content: PageContent;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ content }) => (
  <div>
    <Navbar/>
    <main className=" px-[14rem] pt-[8rem] pb-4" >
      {/* <h1 className="text-3xl font-bold mb-6">{content.title}</h1> */}
    


      {content.questions.map((qa, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{decodeHtml(qa.question)}</h2>
            {Array.isArray(qa.answer) ? (
              qa.answer.map((paragraph, pIndex) => (
                <p key={pIndex} className="mb-4">{decodeHtml(paragraph)}</p>
              ))
            ) : (
              <p className="mb-4">{decodeHtml(qa.answer)}</p>
            )}
          </div>
        ))}


      {/* <h2 className="text-xl font-semibold mb-2">Check out this video to know more:</h2> */}
   
    </main>
    {/* <aside className="w-1/4">
      <h2 className="text-xl font-semibold mb-4">Recent Heading</h2>
      <ul>
        {content.recentHeadings.map((heading, index) => (
          <li key={index} className="mb-2">{heading}</li>
        ))}
      </ul>
    </aside> */}
    <Footer2/>
  </div>
);

export default PageTemplate;
