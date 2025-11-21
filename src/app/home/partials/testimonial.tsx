import React from 'react';
import { Star } from 'lucide-react';
import Quote from '/icons/quote.svg';
import Image from 'next/image';
import { TestimonialData } from '@/constants/testimonials-data';
import TestimonialCard from '@/components/testimonial-card';
import { cn } from '../../../lib/utils';

const Testimonial = () => {
  return (
    <section className='custom-container flex flex-col gap-6 lg:gap-12'>
      <div className='flex flex-col gap-2 lg:gap-4'>
        <h2 className='text-display-md lg:text-display-2xl text-center font-bold'>
          Trusted Voices
        </h2>
        <p className='lg:text-md text-center text-sm text-neutral-400'>
          Here's what people say about working with me — across projects, teams,
          and timelines.
        </p>
      </div>

      {/* Bento Box Grid */}
      <div className='grid gap-5 lg:grid-cols-[minmax(408px,1fr)_repeat(2,1fr)] lg:grid-rows-2'>
        {/* Border */}
        <div className='from-primary-300 bg-linear-to-br to-[#22252B] p-px lg:row-span-2'>
          {/* Inside */}
          <div className='from-primary-300/0 to-primary-300/20 bg-base-background flex h-full w-full flex-col justify-between bg-linear-to-tl p-[19px] gap-6'>
            {/* Text */}
            <div className='flex flex-col gap-2'>
              <h3 className='text-display-sm lg:text-display-lg font-bold'>
                8x
              </h3>
              <h4 className='lg:text-display-xs text-lg font-bold'>
                More users converted after redesign
              </h4>

              <div className='flex gap-2'>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} color='#F3B64C' fill='#F3B64C' />
                ))}
              </div>

              <p>
                Working with Edwin has been a fantastic experience. His
                attention to detail and commitment to quality are evident in
                every project. He consistently delivers results that exceed
                expectations, making him a valuable asset to any team.
              </p>
            </div>

            {/* Person */}
            <div className='flex items-end justify-between'>
              <div className='flex flex-col gap-4'>
                <Image
                  src='/images/people-faces/face1.svg'
                  width={48}
                  height={48}
                  alt='Person Face'
                />
                <div>
                  <h5>Pablo Stanley</h5>
                  <h6>Product Manager at Finovate</h6>
                </div>
              </div>

              <Image src={Quote} alt='Quote Icon' width={48} height={48} />
            </div>
          </div>
        </div>

        {TestimonialData.map((person, index) => (
          <div
            key={index}
            className={cn(
              'border border-neutral-900',
              index === 0 && 'flex flex-col gap-[19px] lg:col-span-2'
            )}
          >
            <TestimonialCard
              title={person.title}
              multiplier={person.multiplier}
              description={person.description}
              faceSrc={person.faceSrc}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
