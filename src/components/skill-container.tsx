import React from 'react';
import { SkillsData } from '../constants/skill-data';
import { cn } from '../lib/utils';

export const SkillContainer = ({ skill, isLast }: SkillsData) => {
  return (
    <div className={cn('h-[72px] border-b border-neutral-900 flex items-center', isLast && 'border-0')}>
      <p className='lg:py-md px-lg lg:px-3xl py-xs text-sm lg:text-lg'>
        {skill}
      </p>
    </div>
  );
};
