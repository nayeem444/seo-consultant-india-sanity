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
    <nav className="font-montserrat relative h-16 py-4 flex justify-between items-center bg-white">
		<a className="text-3xl font-bold leading-none ml-16 mt-4" href="/">
			<Image src={img1} width={120} height={120} alt='logo' />
		</a>
		<div className="lg:hidden">
			<button className="navbar-burger flex items-center text-blue-600 p-3">
				<svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
		</div>
		<ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
			<li><a className="text-sm text-gray-800 font-bold hover:text-blue-600 hover:font-bold" href="/">Home</a></li>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
		
			<li><a className="text-sm text-gray-800 font-bold hover:text-blue-600 hover:font-bold" href="/#services">Services</a></li>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>			 
			<li><a className="text-sm text-gray-800 font-bold hover:text-blue-600 hover:font-bold" href="/case-study">Case Study</a>
</li>
		</ul>

		<a className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200 mr-16" href="/contact">Get In Touch</a>

   
    <div className="navbar-menu relative z-50 hidden">
		<div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
		<nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
			<div className="flex items-center mb-8">
				<a className="mr-auto text-3xl font-bold leading-none" href="#">
				<Image src={img1} width={120} height={120} alt='logo' />
				</a>
				<button className="navbar-close">
					<svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>
			<div>
				<ul>
					<li className="mb-1">
						<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="/">Home</a>
					</li>
					
					<li className="mb-1">
						<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="/#services">Services</a>
					</li>
					<li className="mb-1">
						<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="/blog">Blog</a>
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
