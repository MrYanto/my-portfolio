import React from 'react';
import Image from 'next/image';

type PortfolioCardProps = {
  num: number;
  year: number;
  image: string;
  alt: string
};

const PortfolioCard = ({ num, year, image, alt }: PortfolioCardProps) => {
  return (
    <figure className='flex flex-col gap-4 w-full'>
      <Image
        src={image}
        alt={alt}
        width={373}
        height={373}
        className='rounded-md w-full pointer-events-none lg:pointer-events-auto hover:-translate-y-2'
      />
      <div>
        <figcaption className='text-lg font-semibold lg:text-xl'>
          Portfolio {num}
        </figcaption>
        <p className='md:text-md text-sm text-neutral-400'>{year}</p>
      </div>
    </figure>
  );
};

export default PortfolioCard;
