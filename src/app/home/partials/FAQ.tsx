'use client';
import React, { useState } from 'react';
import { Button } from '../../../components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../../../components/ui/carousel';
import FAQcard from '../../../components/FAQ-card';
import { FAQdata } from '../../../constants/FAQ-data';

const FAQ = () => {
  return (
    <section className='custom-container flex flex-col items-start'>
      <Carousel className='flex w-full flex-col gap-6 lg:gap-12'>
        <div className='flex w-full flex-col items-center justify-between lg:flex-row'>
          <div className='flex flex-col gap-4'>
            <h2 className='lg:text-display-2xl text-display-md font-bold'>
              Still Got Questions?
            </h2>
            <p>
              I've listed answers to questions I often get as a frontend
              developer.
            </p>
          </div>

          <div className='flex gap-3'>
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>

        <CarouselContent>
          {FAQdata.map((data, index) => (
            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
              <div className='p-1'>
                <FAQcard question={data.question} answer={data.answer} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default FAQ;
