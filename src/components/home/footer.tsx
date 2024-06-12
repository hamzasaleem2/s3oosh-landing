import React from 'react';
import Github from '../icons/Github';

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-gray-300'>
      <div className="py-10 lg:py-16">
        <div className='flex flex-col items-center justify-between mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8'>
          <div className="mb-8 border-b border-gray-600 w-full"></div>
          <div className='flex items-center justify-between w-full'>
            <p className="text-sm sm:text-base">© 2024 S3oosh. All rights reserved.</p>
            <a
              className="flex items-center justify-center space-x-2 rounded-full p-2 sm:p-3 text-sm bg-gray-600 hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              href="https://github.com/hamzasaleem2/s3oosh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              <p className='hidden sm:block'>Star on GitHub</p>
            </a>
          </div>
          <div className="mt-8 border-t border-gray-600 w-full"></div>
        </div>
      </div>
    </footer>
  );
}
