import { StaticImageData } from "next/image";
import FacebookIcon from "../../../public/icons/facebook-icon.svg";
import InstagramIcon from "../../../public/icons/instagram-icon.svg";
import LinkedinIcon from "../../../public/icons/linkedin-icon.svg";
import TiktokIcon from "../../../public/icons/tiktok-icon.svg";

type AboutContacts = {
  platform: string;
  url: string;
  icon: StaticImageData;
  alt: string;
};

export const aboutContacts: AboutContacts[] = [
  {
    platform: 'Facebook', url: 'https://www.facebook.com/', icon: FacebookIcon, alt: 'Facebook Icon',
  },
  {
    platform: 'Instagram', url: 'https://www.instagram.com/', icon: InstagramIcon, alt: 'Instagram Icon',
  },
  {
    platform: 'Linkedin', url: 'https://www.linkedin.com/', icon: LinkedinIcon, alt: 'Linkedin Icon',
  },
  {
    platform: 'Tiktok', url: 'https://www.tiktok.com/', icon: TiktokIcon, alt: 'Tiktok Icon',
  },
];