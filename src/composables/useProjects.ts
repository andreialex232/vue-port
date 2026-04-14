import { ref } from "vue";
import lionheart from "@/assets/images/Screenshot 2026-02-21 140438 1.png"
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

export const useProjects = () => {
    const projects = ref<Project[]>([
        {
            id: 1,
            name: 'The Brothers Lionheart',
            description: 'The team and I brought Astrid Lindgren’s The Brothers Lionheart to life by turning the classic play into a sleek, interactive website. We achieved a smooth and professional digital experience that works perfectly on both phones and computers.  We first built designs in Figma and Adobe, making sure the look and feel matched the story’s mood. We then coded the site from scratch using HTML, CSS, and JavaScript, while using GitHub to work together effectively as a team. The result is a modern tribute that combines creative storytelling with solid technical skills.',
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
            description: 'The Brothers Lionheart is a digital creative project developed during first semester at Erhvervsakademi Sydvest. It is based on the classic play "The Lionheart Brothers" by the renowned author Astrid Lindgren.',
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
            description: 'The Brothers Lionheart is a digital creative project developed during first semester at Erhvervsakademi Sydvest. It is based on the classic play "The Lionheart Brothers" by the renowned author Astrid Lindgren.',
            image: lionheart,
            githubLink: {
                link: "https://github.com/andreialex232/aswik",
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

interface Other_Projects {
    id: number,
    name: string,

}