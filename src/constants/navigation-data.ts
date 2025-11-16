type Navigation = {
    label: string;
    href: string;
    active?: boolean;
}

export const navigationData: Navigation[] = [
    { label: 'Edwin', href: '#', active: true },
    { label: 'About', href: '#about' },
    { label: 'Skill', href: '#skill' },
    { label: 'Projects', href: '#projects' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
];