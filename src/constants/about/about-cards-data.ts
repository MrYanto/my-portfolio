import { StaticImageData } from "next/image";
import FrontendDevelopmentIcon from "../../../public/icons/frontend-development.svg";
import WebPerformanceIcon from "../../../public/icons/web-performance.svg";
import ComponentBasedUIIcon from "../../../public/icons/component-based-ui.svg";
import ResponsiveDesignIcon from "../../../public/icons/responsive-design.svg";

export type AboutCardData = {
    icon: StaticImageData;
    title: string;
    description: string;
};

export const aboutCardsData: AboutCardData[] = [
    {
        icon: FrontendDevelopmentIcon,
        title: "Frontend Development",
        description:"I build responsive, accessible, and scalable websites using modern frontend tools and best practices."
    },
    {
        icon: WebPerformanceIcon,
        title: "Web Performance",
        description:"I optimize websites  for speed and efficiency to ensure smooth experiences across all devices."
    },
    {
        icon: ComponentBasedUIIcon,
        title: "Component Based UI",
        description:"I specialize in crafting reusable UI components that are clean, maintainable, and aligned with design systems."
    },
    {
        icon: ResponsiveDesignIcon,
        title: "Responsive Design",
        description:" ensure that every layout adapts beautifully to different screen sizes — from mobile to desktop."
    },
];