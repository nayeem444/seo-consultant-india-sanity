import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import Head from 'next/head';
import { PopupButton } from "react-calendly";
import { PageContent } from '../../types/content';
import { pageContents, fetchContentBySlug, getAllSlugs } from '../../lib/pages'
import Link from 'next/link';
import Navbar from 'components/Navbar2';
import Footer2 from 'components/Footer2';






const CalendlyPopupButton: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <PopupButton
      url="https://calendly.com/d/cpjz-pkk-k6k"
      rootElement={document.getElementById("__next")}
      text="Book A Free Consultation Call"
      className="bg-transparent border-2 border-blue-500 text-white rounded-full px-6 py-2 my-4 hover:bg-blue-500 hover:text-white transition-colors duration-300"
    />
  );
};


const GlossaryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const topSearched = ['Google Analytics', 'Internal Link', 'Keyword Research'];

  const filteredContent = useMemo(() => {
    return pageContents.filter(content => {
      const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLetter = !selectedLetter || content.category === selectedLetter;
      return matchesSearch && matchesLetter;
    });
  }, [searchTerm, selectedLetter]);

  const groupedContent = useMemo(() => {
    return filteredContent.reduce((acc, content) => {
      if (!acc[content.category]) {
        acc[content.category] = [];
      }
      acc[content.category].push(content);
      return acc;
    }, {} as Record<string, PageContent[]>);
  }, [filteredContent]);

  

  return (
    <>
    
    <div className="min-h-screen bg-[#25282C] text-white font-sans max-w-6xl mx-auto">
      <Head>
      <title>{'SEO Glossary, SEO Terms'}</title>
        <meta name="description" content={' Comprehensive SEO glossary with detailed definitions from A to Z, covering essential terms and concepts.'} />
      </Head>
      {/* Header */}
      <Navbar/>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-6xl font-bold text-center mb-4">SEO Glossary</h1>
        <p className="text-center text-[#D9D9D9] mb-8 max-w-2xl mx-auto">
        Speak the Language of Search Engines Fluently
Explore Our In-Depth SEO Terminology Guide for Success
        </p>

        {/* Search */}
        <div className="mb-8">
          <h2 className="text-center  mb-4">What topic are you interested in?</h2>
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 rounded-full bg-white text-black"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setSelectedLetter(null);
              }}
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Top searched */}
        <div className="text-center mb-12">
          <span className="text-[#D9D9D9] mr-2">Top searched:</span>
          {topSearched.map((term, index) => (
            <button
              key={index}
              className="inline-block bg-[#2465F5] text-white px-3 py-1 rounded-full mr-2 mb-2"
              onClick={() => {
                setSearchTerm(term);
                setSelectedLetter(null);
              }}
            >
              {term}
            </button>
          ))}
        </div>

        {/* Alphabet */}
        <div className="flex justify-center flex-wrap mb-12">
          {alphabet.map((letter) => (
            <button
              key={letter}
              className={`m-2 text-xl hover:text-[#2465F5] ${selectedLetter === letter ? 'text-[#2465F5] font-bold' : ''}`}
              onClick={() => {
                setSelectedLetter(letter === selectedLetter ? null : letter);
                setSearchTerm('');
              }}
            >
              {letter}
            </button>
          ))}
        </div>
        <div className='flex justify-center'>
          <CalendlyPopupButton/>
        </div>

        {/* Content */}
        <div>
          {Object.entries(groupedContent).map(([category, contents]) => (
            <div key={category} className="mb-12">
              <h2 className="text-6xl font-bold text-[#2465F5] mb-6">{category}</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {contents.map((content, index) => (
                  <div key={index} className="bg-[#3b3b3b] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#fff] mb-2">{content.title}</h3>
                   
                    <Link 
                      href={`seo-glossary/${content.slug}`}
                      className="inline-block bg-transparent border-[1px] border-blue-500 text-white rounded-full px-6 py-[4px] hover:bg-blue-500 hover:text-white transition-colors duration-300 "
                    >
                      Know More
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredContent.length === 0 && (
          <p className="text-center text-[#D9D9D9] text-xl">No content found matching your search or filter.</p>
        )}
      </main>
      <Footer2/>
    </div>
    </>
 
  );
};

export default GlossaryPage;
