import { StaticImageData } from 'next/image';
import React from 'react';
import MarqueeIcon from "../../public/icons/marquee-icon.svg";

type MarqueeData = {
  text: string;
  icon: StaticImageData;
  alt: string;
};

export const marqueeData: MarqueeData[] = [
  {
    text: 'App Development',
    icon: MarqueeIcon,
    alt: 'Marquee Icon',
  },
  {
    text: 'Website Development',
    icon: MarqueeIcon,
    alt: 'Marquee Icon',
  },
  {
    text: 'Pixel Perfect',
    icon: MarqueeIcon,
    alt: 'Marquee Icon',
  },
  {
    text: 'React Expert',
    icon: MarqueeIcon,
    alt: 'Marquee Icon',    
  },
];
