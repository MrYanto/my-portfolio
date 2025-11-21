import { StaticImageData } from 'next/image';

export type TestimonialProps = {
  multiplier?: number;
  title?: string;
  description: string;
  faceSrc: string | StaticImageData;
};

export const TestimonialData: TestimonialProps[] = [
  {
    multiplier: 3,
    title: 'Improved user engagement and sign-ups',
    description:
      "Edwin's expertise in frontend development is remarkable. He brings creativity and innovation to the table, ensuring that every project is not only functional but also visually appealing.",
    faceSrc: '/images/people-faces/face2.svg',
  },
  {
    description:
      "Edwin's work ethic and dedication are truly inspiring. He approaches challenges with a positive attitude and consistently finds effective solutions.",
    faceSrc: '/images/people-faces/face3.svg',
  },
  {
    description:
      "Edwin has a unique ability to transform complex ideas into user-friendly designs. His contributions have significantly enhanced our projects.",
    faceSrc: '/images/people-faces/face4.svg',
  },
];
