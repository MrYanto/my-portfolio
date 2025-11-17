import React from 'react';
import { Button } from '../../../components/ui/button';
import { Mail } from 'lucide-react';
import { techStackData } from '../../../constants/tech-stack-data';
import TechStackLayout from '../../../components/tech-stack-layout';

const TechStack = () => {
  return (
    <section className='custom-container flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:gap-[191px]'>
      <div className='flex w-fit flex-col justify-between gap-6 lg:h-[529px]'>
        <div className='flex flex-col gap-4'>
          <h2 className='text-display-md lg:text-display-2xl font-bold'>
            Tools I Use to Build
          </h2>
          <p className='lg:text-md text-sm text-neutral-400'>
            From code to design — here's the tech that helps me turn ideas into
            real products.
          </p>
        </div>
        <Button leftAddon={<Mail />} className='w-full'>
          Send Message
        </Button>
      </div>

      <div className='scrollbar-thin scrollbar-left scrollbar-track-transparent  scrollbar-thumb-white h-[529px] w-full max-w-[642px] overflow-y-scroll'>
        {techStackData.map((tech) => (
          <div key={tech.name}>
            <TechStackLayout
              icon={tech.icon}
              alt={tech.alt}
              name={tech.name}
              usePercentage={tech.usePercentage}
            />

            <div className='block border-b border-neutral-900' />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
