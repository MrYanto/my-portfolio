import React from 'react';
import { marqueeData } from '../../constants/marquee-data';
import Image from 'next/image';
import { cn } from '../../lib/utils';

const Marquee = () => {
  const duplicatedData = [...marqueeData, ...marqueeData];
  return (
    <div className='bg-primary-300 pointer-events-none flex w-full flex-row items-center overflow-hidden py-6 font-medium whitespace-nowrap text-white'>
      <div className='pr-3.5 flex animate-marquee gap-3.5 flex-row [--duration:20s]'>
        {duplicatedData.map((item, index) => (
          <div
            className='flex shrink-0 items-center gap-3.5'
            key={`${item.text}-${index}`}
          >
            <h2
              className='font-medium whitespace-nowrap text-white'
              style={{ fontSize: 'clamp(1.25rem, 3.33vw, 2.5rem)' }}
            >
              {item.text}
            </h2>
            <Image
              src={item.icon}
              alt={item.alt}
              style={{
                width: 'clamp(2.38rem, 5.67vw, 4.25rem)',
                height: 'clamp(2.38rem, 5.67vw, 4.25rem)',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
