import React from 'react';
import { Button } from '../../../components/ui/button';
import { MailIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      className='flex min-h-dvh flex-col justify-between lg:flex-row-reverse custom-container'
      id='hero'
    >
      {/* Background */}

      {/* Mobile mask */}
      <div
        className='pointer-events-none absolute -top-full right-0 bottom-0 -left-full -z-10 overflow-hidden md:hidden'
        style={{
          backgroundImage: `
            linear-gradient(to right, #FFFFFF 0.3px, transparent 1px),
            linear-gradient(to bottom, #FFFFFF 0.3px, transparent 1px)
          `,
          backgroundSize: '14px 24px',
          maskImage:
            'radial-gradient(ellipse 80% 50% at 50% 50%, black 0%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 50% at 50% 50%, black 0%, transparent 100%)',
        }}
      >
        <div className='bg-primary-300 absolute top-0 right-0 left-0 -z-10 m-auto size-[1230px] rounded-full blur-[300px]'></div>
      </div>

      {/* Desktop mask */}
      <div
        className='absolute -top-full right-0 bottom-0 -left-full -z-10 hidden md:block'
        style={{
          backgroundImage: `
            linear-gradient(to right, #FFFFFF 0.3px, transparent 1px),
            linear-gradient(to bottom, #FFFFFF 0.3px, transparent 1px)
          `,
          backgroundSize: '14px 24px',
          maskImage:
            'radial-gradient(ellipse 40% 50% at 50% 50%, black 0%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 40% 50% at 50% 50%, black 0%, transparent 100%)',
        }}
      >
        <div className='bg-primary-300 absolute top-0 right-0 left-0 -z-10 m-auto size-[1230px] rounded-full blur-[300px]'></div>
      </div>

      {/* right side & top-mobile */}
      <div
        className='pointer-events-none relative flex-3 basis-80'
        style={{ height: 'clamp(31rem, 55.92vw, 41.94rem)' }}
      >
        <Image
          src='/images/hero-image.svg'
          alt='A picture of a man inside of the phone smiling (Hero Section Image)'
          fill
          className='object-contain'
          priority
        />
      </div>

      {/* left side & bottom-mobile*/}
      <div className='flex max-w-[684px] h-fit flex-7 basis-80 flex-col gap-8 lg:translate-y-[227px] lg:gap-[62px]'>
        {/* Text */}
        <div className='flex flex-col gap-4 lg:gap-8'>
          <p className='text-md lg:text-xl'>Hi, I'm Edwin Anderson</p>
          <div className='flex flex-col lg:gap-7'>
            <h1
              className='leading-17 font-bold uppercase'
              style={{ fontSize: 'clamp(3.5rem, 8vw, 6em)' }}
            >
              Front<span className='font-[Charm]'>end</span>
            </h1>
            <h1
              className='leading-17 font-bold uppercase'
              style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)' }}
            >
              Developer
            </h1>
          </div>
          <p className='text-sm text-neutral-400 lg:text-lg'>
            Passionate about frontend development, I focus on crafting digital
            products that are visually polished, performance-optimized, and
            deliver a consistent experience across all platforms.
          </p>
        </div>
        {/* Button */}
        <Button leftAddon={<MailIcon />} className='w-[287px]'>
          Hire Me
        </Button>
      </div>
    </section>
  );
};

export default Hero;
