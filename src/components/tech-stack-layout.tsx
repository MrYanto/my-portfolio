import React from 'react';
import Image from 'next/image';
import { TechStackData } from '../constants/tech-stack-data';

const TechStackLayout = ({ icon, alt, name, usePercentage }: TechStackData) => {
  return (
    <div className='flex w-full justify-between items-center text-center my-[15px]'>
      <div className='flex items-center gap-[3px] text-center'>
        <Image src={icon} alt={alt} className='size-15'/>
        <h3 className='text-md lg:font-xl'>{name}</h3>
      </div>
      {usePercentage !== null && (
        <p className='text-md lg:text-xl font-bold'>{usePercentage}%</p>
      )}
    </div>
  );
};

export default TechStackLayout;
