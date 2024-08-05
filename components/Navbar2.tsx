// components/Navbar.js
import { useEffect } from 'react';
import Image from 'next/image';
import img1 from '../public/ss (1).png';

const Navbar = () => {
  useEffect(() => {
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
      for (let i = 0; i < burger.length; i++) {
        burger[i].addEventListener('click', () => {
          for (let j = 0; j < menu.length; j++) {
            menu[j].classList.toggle('hidden');
          }
        });
      }
    }

    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
      for (let i = 0; i < close.length; i++) {
        close[i].addEventListener('click', () => {
          for (let j = 0; j < menu.length; j++) {
            menu[j].classList.toggle('hidden');
          }
        });
      }
    }

    if (backdrop.length) {
      for (let i = 0; i < backdrop.length; i++) {
        backdrop[i].addEventListener('click', () => {
          for (let j = 0; j < menu.length; j++) {
            menu[j].classList.toggle('hidden');
          }
        });
      }
    }
  }, []);

  return (
    <nav className="bg-[#25282C] text-[#fff] font-montserrat relative h-20 py-8 flex justify-between items-center px-16 border-b border-[#717171]">
      <a className="text-3xl font-bold leading-none ml-4" href="/">
        <Image src={img1} width={120} height={120} alt="logo" />
      </a>
      <div className="flex items-center">
        <div className="hidden lg:flex lg:items-center lg:space-x-12 mr-6">
          <a className="text-sm font-normal hover:text-blue-600" href="/">
            Home
          </a>
          <a className="text-sm font-normal hover:text-blue-600 mx-8" href="/#services">
            Services
          </a>
          <a className="text-sm font-normal hover:text-blue-600" href="/case-study">
            Case Study
          </a>
        </div>
        {/* <a
          className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
          href="/contact"
        >
          Get In Touch
        </a> */}
        <a
              href="#"
              className="inline-block bg-[#3B3B3B] border-2 border-blue-500 text-white rounded-full px-6 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300 "
              href="/contact"
            >
              Get In Touch
            </a>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-blue-600 p-3">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="navbar-menu relative z-50 hidden">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <Image src={img1} width={120} height={120} alt="logo" />
            </a>
            <button className="navbar-close">
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="/#services"
                >
                  Services
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="/blog"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2024</span>
            </p>
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
