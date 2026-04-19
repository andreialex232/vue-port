import { ref } from "vue"
//know
import js from "@/assets/svgs/javascript.svg"
import tailwind from "@/assets/svgs/tailwind.svg"
import adobe_c from "@/assets/svgs/adobe.svg"
import vue from "@/assets/svgs/vue.svg"
import html from "@/assets/svgs/html.svg"
import scss from "@/assets/svgs/scss.svg"
import gsap from "@/assets/svgs/gsap-black.svg"

//familiar
import angular from "@/assets/svgs/angular.svg"
import c from "@/assets/svgs/csharp.svg"
import mongo from "@/assets/svgs/mongo.svg"
import node from "@/assets/svgs/nodejs.svg"
import ts from "@/assets/svgs/typescript.svg"
import git from "@/assets/svgs/github.svg"
import figma from "@/assets/svgs/figma.svg"

export const stack = () => {
    const techStack = ref<TechTypes>(
        {
            known: [{
                id: "k1",
                source: js,
                text: "JavaScript (ES6+)"
            },
            {
                id: "k2",
                source: gsap,
                text: "GSAP"
            },
            {
                id: "k3",
                source: html,
                text: "HTML5 & CSS3"
            },
            {
                id: "k4",
                source: tailwind,
                text: "Tailwind CSS"
            },
            {
                id: "k5",
                source: vue,
                text: "Vue"
            },
            {
                id: "k6",
                source: scss,
                text: "SCSS"
            },
            {
                id: "k7",
                source: adobe_c,
                text: "Adobe Creative Cloud"
            },
        ],
            familiar: [{
                id: "f1",
                source: angular,
                text: "Angular"
            },
            {
                id: "f2",
                source: c,
                text: ".NET Framework (C#)"
            },
            {
                id: "f3",
                source: mongo,
                text: "MongoDB"
            },
            {
                id: "f4",
                source: node,
                text: "Node.js"
            },
            {
                id: "f5",
                source: git,
                text: "Git"
            },
            {
                id: "f6",
                source: figma,
                text: "Figma"
            },
            {
                id: "f7",
                source: ts,
                text: "TypeScript"
            },
        ]}
    )

    return {techStack};
}

interface IconText {
    id: string
    source: string,
    text: string
}

interface TechTypes {
    known: IconText[],
    familiar: IconText[],
}