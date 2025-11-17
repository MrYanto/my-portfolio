import React from 'react';
import Marquee from '../../../components/ui/marquee';
import { aboutContacts } from '@/constants/about/about-contacts';
import Image from 'next/image';
import Link from 'next/link';
import { aboutCardsData } from '@/constants/about/about-cards-data';
import AboutCard from '@/components/about-card';

const About = () => {
  return (
    <section id='about' className='mt-[61px] lg:mt-[199px]'>
      <Marquee />
      <div className='custom-container flex flex-col gap-12 lg:gap-24'>
        {/* Opening */}
        <div className='flex flex-col justify-between gap-6 lg:flex-row'>
          <h2 className='lg:text-display-xl text-display-md font-bold'>
            I turn ideas and designs into functional, <br /> accessible, and
            performant websites <br />{' '}
            <span className='text-primary-300'>
              using modern frontend technologies.
            </span>
          </h2>

          <div className='flex flex-col justify-between gap-4'>
            <p className='text-md text-neutral-400 lg:text-lg'>About Me</p>
            <div className='gap-xl flex'>
              {aboutContacts.map((contact) => (
                <div key={contact.platform}>
                  <Link href={contact.url}>
                    <Image src={contact.icon} alt={contact.alt} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The thing I do */}
        <div className='flex flex-col items-center lg:flex-row lg:gap-[41px]'>
          {/* Image */}
          <div
            className='pointer-events-none relative shrink-0'
            style={{
              height: 'clamp(25.56rem, 42.75vw, 32.06rem)',
              width: 'clamp(22.56rem, 37.75vw, 28.31rem)',
            }}
          >
            <Image
              src='/images/about-image.svg'
              alt='Description of the image'
              fill
            />
          </div>

          {/* Cards */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-10'>
            {aboutCardsData.map((card) => (
              <div key={card.title}>
                <AboutCard
                  key={card.title}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />

                <div className='block border-b border-neutral-900 lg:hidden' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
