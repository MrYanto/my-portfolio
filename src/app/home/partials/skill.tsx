import React from 'react';
import { SkillContainer } from '../../../components/skill-container';
import { skillsData } from '../../../constants/skill-data';
import Image from 'next/image';
import CheckIcon from '/icons/check.svg';
import CrossIcon from '/icons/cross.svg';
import { cn } from '../../../lib/utils';

const Skill = () => {
  return (
    <section
      id='skill'
      className='custom-container relative flex flex-col gap-6 overflow-hidden lg:gap-12'
    >
      {/* Background */}

      {/* Mobile mask */}
      <div
        className='pointer-events-none absolute top-0 right-0 -bottom-full -left-full -z-10 overflow-hidden md:hidden'
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
        className='absolute top-0 right-0 -bottom-full -left-full -z-10 hidden md:block'
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

      <div className='flex flex-col items-center gap-2 text-center lg:gap-4'>
        <h2 className='text-display-md lg:text-display-2xl font-bold'>
          Not Your Typical Frontend Developer
        </h2>
        <p className='lg:text-md text-sm text-neutral-400'>
          I care about how it looks, how it works, and how it feels — all at
          once
        </p>
      </div>

      <div className='bg-base-background grid grid-cols-[1fr_66px_66px] md:grid-cols-3 border border-neutral-900 p-6'>
        <div className=''>
          <h3 className='lg:text-display-xs py-xs px-lg lg:py-md lg:px-3xl flex h-[72px] items-center border-b border-neutral-900 font-bold'>
            Skill
          </h3>
          {skillsData.map((item, index) => (
            <SkillContainer
              key={index}
              skill={item.skill}
              isLast={index === skillsData.length - 1}
            />
          ))}
        </div>
        <div className='bg-primary-400'>
          <h3 className='lg:text-display-xs py-xs px-lg lg:py-md lg:px-3xl flex h-[72px] items-center border-b border-white/40 font-bold'>
            With Me
          </h3>
          {skillsData.map((_, index) => (
            <div
              className='px-lg lg:px-3xl py-xs flex h-[72px] items-center border-b border-white/40'
              key={index}
            >
              <Image key={index} src={CheckIcon} alt='Check Icon' />
            </div>
          ))}
        </div>
        <div>
          <h3 className='lg:text-display-xs py-xs px-lg lg:py-md lg:px-3xl flex h-[72px] items-center font-bold'>
            Other
          </h3>
          {skillsData.map((_, index) => (
            <div
              className={cn(
                'px-lg lg:px-3xl py-xs flex h-[72px] items-center border-b border-neutral-900',
                index === skillsData.length - 1 && 'border-0'
              )}
              key={index}
            >
              <Image key={index} src={CrossIcon} alt='Cross Icon' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
