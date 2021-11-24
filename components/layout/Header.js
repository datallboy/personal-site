import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiOutlineMail } from 'react-icons/hi';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  const [email, setEmail] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setEmail('CONTACT@DATALLBOY.COM');
    }, 1000);
  }, []);
  return (
    <header className='h-24 sm:h-32 flex items-center z-30 w-full'>
      <div className='container mx-auto px-6 flex items-center justify-between'>
        <div className='uppercase text-gray-800 dark:text-white font-black text-3xl flex items-center'>
          <HiOutlineMail />
          <span className='text-xs ml-3 mt-1'>{email}</span>
        </div>
        <div className='flex items-center'>
          <nav className='font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden'>
            <Link href='/projects'>
              <a className='py-2 px-6 flex'>Projects</a>
            </Link>
            <Link href='/contact'>
              <a className='py-2 px-6 flex'>Contact</a>
            </Link>
          </nav>
          <button className='lg:hidden flex flex-col ml-4'>
            <span className='w-6 h-1 bg-gray-800 dark:bg-white mb-1'></span>
            <span className='w-6 h-1 bg-gray-800 dark:bg-white mb-1'></span>
            <span className='w-6 h-1 bg-gray-800 dark:bg-white mb-1'></span>
          </button>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}
