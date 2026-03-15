import { ref } from "vue"

export const useAbout = () => {
    const aboutText = ref<about[]> ([
        {
            title: "The Journey",
            description: "Originally from Romania, currently living and studying in Denmark. One of the reasons I chose to move here is my admiration for Scandinavia. Not just the culture but the way technology and society are built on efficiency and high standards. I wanted to immerse myself in an environment that values quality and logic, and I’ve spent my time here adapting my technical approach to match those expectations."
        },
        {
            title: "The Build",
            description: "Right now, I’m looking for opportunities in the Danish and Swedish markets where I can put my hours in and contribute to real projects. I’m adaptable, I learn fast, and I’m ready to work. If you have a project that needs a straightforward developer who values technical execution over empty talk we should have a discussion."
        },
        {
            title: "The Goal",
            description: "When I code, I focus on the logic under the hood, I prefer the structural side of development. Handling data, optimizing performance, and making sure the architecture is solid."
        }
    ])
    return { aboutText }
}

interface about {
    title: string,
    description: string
}