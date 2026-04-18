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

export const useProjects = () => {
    const projects = ref<Project[]>([
        {
            id: 1,
            name: 'The Brothers Lionheart',
            description: "HTML, CSS, and JavaScript were mainly used by our group to make an excellent interactive website out of The Brothers Lionheart. A rating of B for sustainability in Carbon Rating was attained together with outstanding performance on the desktop, where 99 for Performance, 96 for Accessibility, 100 for Best Practices, and 100 for SEO was earned (Performance 82 on mobile).",
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
            id: 2,
            name: 'CPM Ridesharing',
            description: 'This project is a professional platform built with Angular, Sass, and TypeScript to streamline ridesharing collaboration and car rentals. By focusing on clean architecture and modern development practices, I achieved a fast, scalable interface that connects drivers with fleet opportunities. The use of TypeScript ensured code reliability, while Sass allowed for a polished, responsive design tailored for a seamless user experience.',
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
            ]
        },
        {
            id: 3,
            name: 'Aswik',
            description: 'I built ASWIK as a personal project to practice connecting a backend to a database while creating a tool for my own Swedish studies. By using NodeJS and MongoDB, I successfully handled how data interacts between the server and the storage, allowing me to save and track my own word lists. I achieved a functional result where I can log my session history and customize how I practice grammar. It’s a straightforward JavaScript application that works as both a coding exercise in data management and a practical way to store and learn new vocabulary.',
            image: lionheart,
            githubLink: {
                link: "https://github.com/andreialex232/aswik",
                icon: reversedGit
            },
            technologies: [
                {
                    name: 'NodeJS',
                    icon: node
                },
                {
                    name: 'MongoDB',
                    icon: mongo
                },
                {
                    name: 'JavaScript',
                    icon: js
                },
            ]
        }
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