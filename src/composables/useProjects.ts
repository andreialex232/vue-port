import { ref } from "vue";
import lionheart from "@/assets/images/brothers-lionheart.png"
import html from "@/assets/svgs/html.svg"
import css from "@/assets/svgs/css-3.svg"
import figma from "@/assets/svgs/figma.svg"
import js from "@/assets/svgs/javascript.svg"
import adobe from "@/assets/svgs/adobe.svg"
import ext from "@/assets/svgs/ext.svg"
import github from "@/assets/svgs/github.svg"
import ts from "@/assets/svgs/typescript.svg"
import angular from "@/assets/svgs/angular.svg"
import scss from "@/assets/svgs/scss.svg"
import reversedGit from "@/assets/svgs/github-reversed.svg"
import mongo from "@/assets/svgs/mongo.svg"
import node from "@/assets/svgs/nodejs.svg"
import gsap from "@/assets/svgs/gsap-black.svg"
import tailwind from "@/assets/svgs/tailwind.svg"
import vue from "@/assets/svgs/vue.svg"
import gtm from "@/assets/svgs/gtm.svg"

export const useProjects = () => {
    const projects = ref<Project[]>([
        {
            id: 1,
            name: 'Online Portfolio',
            description: 'This site is a live look at my development philosophy. Beyond the UI, I used this project to master the synergy between Vue and GSAP. I focused heavily on the architectural health by integrating i18n and refactoring bloated components from 130+ lines down to 30. I ensured the codebase stayed lean and maintanable. To round out the experience, I implemented Vite SSG and Unhead for optimized SEO and a fast initial load, resulting in a site that is as scalable as it is performant.',
            image: lionheart,
            githubLink: {
                link: "https://github.com/andreialex232/vue-port",
                icon: reversedGit
            },
            technologies: [
                {
                    name: 'Vue.js',
                    icon: vue
                },
                {
                    name: 'GSAP',
                    icon: gsap
                },
                {
                    name: 'JavaScript',
                    icon: js
                },
                {
                    name: 'Tailwind CSS',
                    icon: tailwind
                },
            ]
        },
        {
            id: 2,
            name: 'The Brothers Lionheart',
            description: "For my first collaborative project, our group created a digital experience for The Brothers Lionheart. We delivered a high-performance interactive site that earned a B-rating for sustainability (Carbon Rating) and exceptional Lighthouse scores: 99 performance, 96 accessibility and 100 in both Best Practices and SEO. It was a masterclass in teamwork and technical exewcution using HTML, CSS and JS.",
            image: lionheart,
            githubLink: {
                link: "https://github.com/andreialex232/The-Lionheart-Brothers",
                icon: reversedGit
            },
            technologies: [
                {
                    name: 'HTML',
                    icon: html
                },
                {
                    name: 'CSS',
                    icon: css
                },
                {
                    name: 'Figma',
                    icon: figma
                },
                {
                    name: 'JavaScript',
                    icon: js
                },
                {
                    name: 'Adobe Creative Cloud',
                    icon: adobe
                }
            ],
            teamMembers: [
                {
                    name: 'Lando Marynissen',
                    link: 'https://www.linkedin.com/in/lando-marynissen-29369024b/',
                    icon: ext
                },
                {
                    name: 'Helena Ramirez Ripa',
                    link: 'https://www.linkedin.com/in/helenaramirezripa/',
                    icon: ext
                    
                },
                {
                    name: 'Patricia P. Gundelfingen',
                    link: 'https://www.linkedin.com/in/patricia-gundelfingen/',
                    icon: ext
                }
            ]
        },
        {
            id: 3,
            name: 'CPM Ridesharing',
            description: 'Designed, coded and deployed in 2023. This was one of my first major projects. Solving a real-world need for a car rental business catering to rideshare drivers. Built with Angular, Sass and TypeScript, the site was optimized for speed and accessibility from day one. Used Google Tag Manager to further understand the users. Even today it maintains an impressive 95+ performance rating on desktop and a strong 87% on mobile.',
            image: lionheart,
            githubLink: {
                link: "https://github.com/andreialex232/cpm-ridesharing",
                icon: reversedGit
            },
            technologies: [
                {
                    name: 'Angular',
                    icon: angular
                },
                {
                    name: 'TypeScript',
                    icon: ts
                },
                {
                    name: 'Sass',
                    icon: scss
                },
                {
                    name: 'Google Tag Manager',
                    icon: gtm
                },
            ]
        },
        
    ])
    return {
        projects
    }
}

interface Project {
    id: number;
    name: string;
    description: string;
    image: string;
    githubLink: { 
        link: string,
        icon: string
    };
    technologies: {
        name: string;
        icon?: string;
    }[];
    teamMembers?: {
        name: string,
        link: string,
        icon: string
    }[]
}