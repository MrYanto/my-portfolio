import React from 'react';
import Image from 'next/image';
import BriefcaseIcon from '/icons/briefcaseIcon.svg';
import { brandData } from '../constants/techJourney-brand-data';

const TechJourneyCard = ({ brand }: brandData) => {
  return (
    <div
      className='relative flex w-full shrink-0 flex-col gap-5 border border-neutral-900 p-5'
      style={{
        width: 'clamp(22.56rem, 47vw, 35.25rem)',
      }}
    >
      <div className='bg-primary-300 absolute left-0 h-17 w-[3px]' />
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-2'>
          <h3 className='text-md font-bold lg:text-xl'>Frontend Developer</h3>
          <p className='lg:text-md text-sm'>2025- Present</p>
        </div>

        <Image src={BriefcaseIcon} alt='Briefcase Icon' />
      </div>
      <div className='block border-b border-neutral-900' />
      <p className='lg:text-md text-sm text-neutral-400'>
        Built responsive web interfaces using modern frameworks like React.js,
        ensuring seamless integration with backend systems. Optimized
        performance, implemented accessible designs, and delivered clean,
        reusable code to enhance user experience and scalability.
      </p>
      {/* Brand Image */}
      {brand && <Image src={brand || null} alt={`${brand}-icon`} className='pointer-events-none'/>}
    </div>
  );
};

export default TechJourneyCard;
