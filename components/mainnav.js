import React from 'react';
import NavigationMenuDemo from '@/components/NavigationMenuDemo';

const mainnav = () => {
  return (
    <div className='font-quicksand'>
      <header className=' p-2 supports-backdrop-blur:bg-background/60  sticky top-0 z-40 w-full border-b bg-background/90 shadow-sm backdrop-blur  '>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='text-left font-semibold flex items-center'>
            <svg
              className='w-6 h-6 mr-2 text-slate-900'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <polygon points='12 2 2 22 12 18 22 22'></polygon>
            </svg>
            <span className='text-slate-900'>Project Dashboard</span>
          </div>
          <NavigationMenuDemo />
          <div className='text-right'></div>
        </div>
      </header>
    </div>
  );
};

export default mainnav;
