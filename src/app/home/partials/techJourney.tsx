import React from 'react';
import { Button } from '../../../components/ui/button';
import TechJourneyCard from '../../../components/tech-journey-card';
import { BrandDatas } from '../../../constants/techJourney-brand-data';

const TechJourney = () => {
  return (
    <section className='custom-container flex flex-col gap-6 lg:gap-12'>
      <div className='flex flex-col gap-2 lg:gap-4'>
        <h2 className='lg:text-display-2xl text-display-md font-bold'>
          My Journey Tech
        </h2>
        <p className='lg:text-md text-sm text-neutral-400'>
          From small gigs to real-world challenges — each experience helped me
          grow as a builder and problem-solver.
        </p>
      </div>

      <div className='flex flex-col gap-12'>
        <div className='flex w-full gap-5'>
          {BrandDatas.map((img, index) => (
            <div key={index}>
              <TechJourneyCard brand={img.brand}/>
            </div>
          ))}
        </div>
        <div className='border-4 border-white' />
        <div className='flex w-fit gap-3'>
          <Button variant={'outline'} className='w-[118px]'>
            Prev
          </Button>
          <Button variant={'outline'} className='w-[118px]'>
            Next
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechJourney;
