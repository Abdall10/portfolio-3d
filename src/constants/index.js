import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    tailwindcss,
    typescript,
} from "../assets/icons";

import cpp from '../assets/software/cpp.svg';
import weather from '../assets/software/weather.png'

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: cpp,
        name: "c++",
        type: "software",
    },
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "freelancer",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "freelancer",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "freelancer",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "freelancer",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    }, 
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Abdall10/App-Store-js',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'www.linkedin.com/in/abdallah-rafat-7aa0a7285',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/Abdall10/App-Store-js',
    },
    {
        iconUrl: weather,
        theme: 'btn-back-green',
        name: 'Full Stack weather conditions',
        description: 'A website was created using next.js to know all weather conditions and daily weather forecasts.',
        link: 'https://github.com/Abdall10/nextjs-weather-app-determine-the-location',
    },
    {
        iconUrl: cpp,
        theme: 'btn-back-blue',
        name: 'C++',
        description: 'A detailed explanation of the C++ language, functions and loop',
        link: 'https://github.com/Abdall10/Function-cpp',
    },
    {
        iconUrl: cpp,
        theme: 'btn-back-yellow',
        name: 'object oriented programming',
        description: 'OOP stands for Object-Oriented Programming',
        link: 'https://github.com/Abdall10/oop-c-',
    },
    {
        iconUrl: cpp,
        theme: 'btn-back-pink',
        name: 'ATM system in C++',
        description: 'ATM software, which simulates ATM operations such as balance checking, withdrawal, deposit, and password validation.',
        link: 'https://github.com/Abdall10/Atm-cpp',
    },
    {
        iconUrl: javascript,
        theme: 'btn-back-black',
        name: 'javascript learning',
        description: 'Explaining the most important elements in JavaScript, such as Control-flow,Dom.js, Function ,Higher ,Math,Scope ,loop, and object.',
        link: 'https://github.com/Abdall10/learnnig-Javascript/tree/main/javaScript-leiring',
    },
];
