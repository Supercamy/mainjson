import React from 'react';
import Card from '@/components/maindash/Card';

const dashboard = () => {
  return (
    <div className='h-[calc(100vh-70px)]  grid grid-cols md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-4 p-4 '>
      {' '}
      <div className='col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center'>
        <Card />
      </div>
      <div className='md:col-span-2 row-span-4'>
        <Card />
      </div>
      <div>
        <Card />
      </div>
      <div className='row-span-2 xl:row-span-3'>
        <Card />
      </div>
    </div>
  );
};

export default dashboard;
