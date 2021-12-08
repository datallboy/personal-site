import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  const [email, setEmail] = useState('');
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setEmail('CONTACT@DATALLBOY.COM');
    }, 1000);
  }, []);

  return (
    <header className='py-8 sm:py-10 flex z-30 w-full'>
      <div className='container mx-auto px-6 flex flex-wrap items-center justify-between'>
        <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
          <div className='uppercase text-gray-800 dark:text-white font-black text-3xl flex items-center'>
            <HiOutlineMail />
            <span className='text-xs ml-3 mt-1'>{email}</span>
          </div>
          <button
            className='text-gray-800 dark:text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
            type='button'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FaBars />
          </button>
        </div>

        <div
          className={`lg:flex flex-grow items-center ${
            navbarOpen ? 'flex' : 'hidden'
          }`}
        >
          <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
            <nav className='font-sen text-gray-800 dark:text-white uppercase text-md lg:flex items-center'>
              <li className='nav-item py-2 lg:px-6'>
                <Link href='/blog'>
                  <a>Blog</a>
                </Link>
              </li>
              <li className='nav-item py-2 lg:px-6'>
                <Link href='/projects'>
                  <a>Projects</a>
                </Link>
              </li>
              <li className='nav-item py-2 lg:px-6'>
                <Link href='/contact'>
                  <a>Contact</a>
                </Link>
              </li>
              <DarkModeToggle />
            </nav>
          </ul>
        </div>
      </div>
    </header>
  );
}
