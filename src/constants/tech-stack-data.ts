import { StaticImageData } from "next/image";
import HTMLIcon from "/icons/tech-stack/HTML.svg";
import CSSIcon from "/icons/tech-stack/CSS.svg";
import JSIcon from "/icons/tech-stack/Javascript.svg";
import TSIcon from "/icons/tech-stack/TypeScript.svg";
import SequelIcon from "/icons/tech-stack/Sequalize.svg";
import MongoDBIcon from "/icons/tech-stack/Mongo-DB.svg";
import ReactJSIcon from "/icons/tech-stack/React-JS.svg";
import ReactNIcon from "/icons/tech-stack/React-Native.svg";
import NextJSIcon from "/icons/tech-stack/Next-JS.svg";
import DockerIcon from "/icons/tech-stack/Docker.svg";
import EJSIcon from "/icons/tech-stack/Express-JS.svg";
import PostgreSQLIcon from "/icons/tech-stack/PostgreSQL.svg";


export type TechStackData = {
    icon: StaticImageData;
    alt: string;
    name: string;
    usePercentage: number | null;
};

export const techStackData: TechStackData[] = [
    {
        icon: HTMLIcon,
        alt: "HTML5 Icon",
        name: "HTML",
        usePercentage: 100,
    },
    {
        icon: CSSIcon,
        alt: "CSS3 Icon",
        name: "CSS",
        usePercentage: 90,
    },
    {
        icon: JSIcon,
        alt: "JavaScript Icon",
        name: "JavaScript",
        usePercentage: 90,
    },
    {
        icon: TSIcon,
        alt: "TypeScript Icon",
        name: "TypeScript",
        usePercentage: 80,
    },
    {
        icon: SequelIcon,
        alt: "Sequelize Icon",
        name: "Sequelize",
        usePercentage: 80,
    },
    {
        icon: MongoDBIcon,
        alt: "MongoDB Icon",
        name: "MongoDB",
        usePercentage: 75,
    },
    {
        icon: ReactNIcon,
        alt: "React Native Icon",
        name: "React Native",
        usePercentage: null,
    },
    {
        icon: ReactJSIcon,
        alt: "ReactJS Icon",
        name: "ReactJS",
        usePercentage: null,
    },
    {
        icon: NextJSIcon,
        alt: "NextJS Icon",
        name: "NextJS",
        usePercentage: null,
    },
    {
        icon: EJSIcon,
        alt: "ExpressJS Icon",
        name: "ExpressJS",
        usePercentage: null,
    },
    {
        icon: PostgreSQLIcon,
        alt: "PostgreSQL Icon",
        name: "PostgreSQL",
        usePercentage: null,
    },
    {
        icon: DockerIcon,
        alt: "Docker Icon",
        name: "Docker",
        usePercentage: null,
    },
];


