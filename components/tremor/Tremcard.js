'use client';

import React, { useState } from 'react';
import { Card, Grid, Tab, TabList, Text, Title } from '@tremor/react';
import KpiCard from './KpiCard';

const Tremcard = () => {
  const [selectedView, setSelectedView] = useState('1');

  return (
    <div>
      <main className='bg-slate-50 p-6 sm:p-10'>
        <Title>Dashboard</Title>
        <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

        <TabList
          defaultValue='1'
          onValueChange={(value) => setSelectedView(value)}
          className='mt-6'
        >
          <Tab value='1' text='Overview' />
          <Tab value='2' text='Detail' />
        </TabList>

        {selectedView === '1' ? (
          <>
            <Grid numColsLg={2} className='mt-6 gap-6'>
              <Card>
                {/* Placeholder to set height */}
                <KpiCard className='h-28' />
              </Card>
              <Card>
                {/* Placeholder to set height */}
                <div className='h-28' />
              </Card>
              {/* <Card>

                <div className='h-28' />
              </Card> */}
            </Grid>

            <div className='mt-6'>
              <Card>
                <div className='h-80' />
                <h1>THis is test</h1>
              </Card>
            </div>
          </>
        ) : (
          <Card className='mt-6'>
            <div className='h-96' />
          </Card>
        )}
      </main>
    </div>
  );
};

export default Tremcard;
