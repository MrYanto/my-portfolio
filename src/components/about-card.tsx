import React from 'react';
import { type AboutCardData } from '../constants/about/about-cards-data';
import Image from 'next/image';

const AboutCard = ({ icon, title, description }: AboutCardData) => {
  return (
    <div className='flex flex-col my-6 lg:my-0'>
      <Image src={icon} alt={`${title}-icon`} className='relative top-0 left-0'/>
      <h3 className='mt-4 lg:mt-6 text-lg lg:text-xl font-bold'>{title}</h3>
      <p className='mt-0.5 text-sm lg:text-md text-neutral-400'>{description}</p>
    </div>
  );
};

export default AboutCard;
