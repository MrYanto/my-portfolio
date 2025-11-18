import { StaticImageData } from 'next/image';
import CheckIcon from '/icons/check.svg';
import CrossIcon from '/icons/cross.svg';

export type SkillsData = {
  skill: string;
  isLast?: boolean
};

export const skillsData: SkillsData[] = [
  { skill: 'React Expert' },
  { skill: 'Pixel Perfect' },
  { skill: 'TypeScript Proficiency' },
  { skill: 'Clean, Maintainable Code' },
  { skill: 'Performance Optimization' },
  { skill: 'Responsive Website' },
  { skill: 'UI Design Proficiency (Figma)' },
];
