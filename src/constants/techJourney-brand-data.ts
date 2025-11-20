import { StaticImageData } from 'next/image';
import AirbnbBrand from '/icons/brands/airbnb.svg';

export type brandData = {
  brand: StaticImageData;
};

export const BrandDatas: brandData[] = [
  { brand: AirbnbBrand },
  { brand: AirbnbBrand },
  { brand: AirbnbBrand },
  { brand: AirbnbBrand },
];
