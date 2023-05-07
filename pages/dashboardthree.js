import React from 'react';
import Card from '@/components/maindash/Card';
import Charttest from '@/components/chart/charttest';
import Tremcard from '@/components/tremor/Tremcard';

const dashboardthree = () => {
  return (
    <div className='h-[calc(100vh-70px)]  grid grid-cols md:grid-cols-2 xl:grid-cols-6 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-4 p-4 '>
      {' '}
      <div className='col-span-1 md:col-span-2 xl:col-span-6 row-span-1 flex justify-start items-center'>
        <Card />
      </div>
      <div className=' xl:col-span-3  row-span-6'>
        <Charttest />
      </div>
      <div className=' xl:col-span-3  row-span-6'>
        <Tremcard />
      </div>
    </div>
  );
};

export default dashboardthree;
