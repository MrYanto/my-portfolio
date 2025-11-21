import React, { useState } from 'react';
import { cn } from '../lib/utils';
import Image from 'next/image';
import { FAQtype } from '../constants/FAQ-data';

const FAQcard = ({ question, answer }: FAQtype) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={cn(
        'space-between cursor-pointer p-5 transition-all duration-300',
        show
          ? 'bg-primary-400 h-[356px] w-fit text-white lg:h-[466px]'
          : 'h-[356px] w-[252px] border border-neutral-900 bg-black text-white/70 lg:h-[466px]'
      )}
      onClick={() => setShow(!show)}
    >
      {show ? (
        <div className='flex h-full w-fit max-w-[353px] flex-col justify-between'>
          <div className='flex justify-between'>
            <Image
              src='/images/profile.svg'
              width={80}
              height={80}
              alt='Profile Picture'
            />
            <Image
              src='/icons/message.svg'
              width={40}
              height={40}
              alt='message Icon'
            />
          </div>

          <div className='flex flex-col gap-3'>
            <h3 className='lg:text-display-sm text-xs font-semibold'>
              {question}
            </h3>
            <p className='text-neutral-25 lg:text-md text-sm font-medium'>
              {answer}
            </p>
          </div>
        </div>
      ) : (
        <div className='h-full flex flex-col justify-between'>
          <Image
            src='/icons/message.svg'
            width={40}
            height={40}
            alt='message Icon'
          />

          <h3 className='lg:text-display-sm text-xs font-semibold'>
            {question}
          </h3>
        </div>
      )}
    </div>
  );
};

export default FAQcard;
