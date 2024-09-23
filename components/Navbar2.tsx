import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import img1 from '../public/newlogofinal.png';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="mx-auto bg-[#25282C] text-white font-montserrat relative w-full border-b border-[#717171] max-w-7xl">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="">
            <Image src={img1} width={200} height={90} alt="logo" className="h-14 w-auto " />
          </Link>
          <div className="flex items-center">
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/#services">Services</NavLink>
              <NavLink href="/case-study">Case Study</NavLink>
            </div>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-blue-500 text-white rounded-full px-4 py-2 ml-8 hover:bg-blue-500 hover:text-white transition-colors duration-300 text-sm"
            >
              Get In Touch
            </Link>
            <button
              className="lg:hidden ml-4 text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-25" onClick={toggleMenu}></div>
          <nav className="fixed top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-l overflow-y-auto z-50">
            <div className="flex items-center mb-8">
              <Link href="/" className="mr-auto">
                <Image src={img1} width={120} height={120} alt="logo" className="h-8 w-auto" />
              </Link>
              <button className="text-gray-400 hover:text-gray-500" onClick={toggleMenu}>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-auto">
              <Link
                href="/contact"
                className="block w-full px-4 py-2 text-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
              >
                Get In Touch
              </Link>
              <p className="mt-6 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Your Company. All rights reserved.
              </p>
            </div>
          </nav>
        </div>
      )}
    </nav>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link href={href} className="text-sm font-medium text-white hover:text-blue-300">
    {children}
  </Link>
);

export default Navbar;