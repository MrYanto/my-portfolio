import Image from 'next/image';
import { Star } from 'lucide-react';
import { TestimonialProps } from '@/constants/testimonials-data';

const TestimonialCard = ({
  multiplier,
  title,
  description,
  faceSrc,
}: TestimonialProps) => {
  return (
    <div className='flex h-full w-full flex-col justify-between gap-6 p-5'>
      {/* Text */}
      <div className='flex flex-col gap-2'>
        {multiplier && (
          <h3 className='text-display-sm lg:text-display-lg font-bold'>
            {multiplier}X
          </h3>
        )}

        <h4 className='text-lg font-bold'>{title}</h4>

        <div className='flex gap-2'>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} color='#F3B64C' fill='#F3B64C' />
          ))}
        </div>

        <p>{description}</p>
      </div>

      {/* Person */}
      <div className='flex items-end justify-between'>
        <div className='flex flex-col gap-4'>
          <Image src={faceSrc} width={48} height={48} alt={"Someone's Face"} />

          <div>
            <h5>Pablo Stanley</h5>
            <h6>Product Manager at Finovate</h6>
          </div>
        </div>

        <Image src='/icons/quote.svg' width={48} height={48} alt='Quote Icon' />
      </div>
    </div>
  );
};

export default TestimonialCard;
