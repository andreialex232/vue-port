import { ref } from "vue";
import police_brutality_poster from "@/assets/images/posters/police_comp.png";
import adobe_ai from "@/assets/svgs/adobe-ai.svg";
import github_icon from "@/assets/svgs/github-reversed.svg";
import adobe_ae from "@/assets/svgs/adobe-ae.svg";
import php from "@/assets/svgs/php.svg";
import wp from "@/assets/svgs/wordpress.svg";
import rocket_desktop from "@/assets/animations/rocket_desktop.mp4";
import rocket_mobile from "@/assets/animations/rocket_mobile.mp4"
import hotel_cms from "@/assets/images/hotel-cms.webp";

export const useOtherProjects = () => {
    const otherProjects = ref<OtherProjects>({
        posters: [
            {
                id: "p1",
                name: "Police Brutality Awareness Poster",
                subheading: "The Deadly Pattern",
                img: police_brutality_poster,
                technology: {
                    name: "Adobe Illustrator",
                    icon: adobe_ai
                },
                description: "This infographic poster shows the persistent rise of police brutality in the U.S. despite decades of reform efforts. By synthesizing statistical data, high-profile case studies, and policy analysis, the design illustrates with proof how systemic failures often undermine legislative change."
            },
            {
                id: "p2",
                name: "Marketing Poster For Racing Event",
                subheading: "Racing 230",
                img: police_brutality_poster,
                technology: {
                    name: "Adobe Illustrator",
                    icon: adobe_ai
                },
                description: "Poster design for a local racing event, highlighting the excitement and thrill of the competition. The design incorporates dynamic imagery, bold typography, and vibrant colors to capture the attention of potential attendees and convey the energy of the event."
            },
        ],
        wordpress: [
            {
                id: "w1",
                name: "WordPress CMS Project",
                description: "A WordPress project created for a school assignment. the assignment included daily scrum meetings, sprint planning, and retrospectives. the project was built using a custom theme and included features such as custom post types, custom fields. the project was developed using PHP, HTML, CSS",
                img: hotel_cms,
                githubLink: {
                    name: "See Final Project",
                    url: "https://github.com/Patricia-P-G/HotelCMS",
                    icon: github_icon,
                },
                technology: [{
                    name: "WordPress",
                    icon: wp
                },
                {
                    name: "PHP",
                    icon: php
                }]
            }
        ],
        animations: [
            {
                id: "a1",
                name: "Rocket To Moon Animation",
                description: "This animation serves as a high energy segment of my Video CV, built with Adobe After Effects and Illustrator. While this project showcases my professional motion skills, my foundation in editing runs much deeper. I've been editing videos and funny moments for over 10 years, transforming a long-term hobby into an instinct for timing, pacing and visual storytelling.",
                sourceMobile: rocket_mobile,
                sourceDesktop: rocket_desktop,
                technology: [{
                    name: "Adobe After Effects",
                    icon: adobe_ae
                },
                {
                    name: "Adobe Illustrator",
                    icon: adobe_ai
                }]
            }
        ]
    })

    return {
        otherProjects
    }
}

// building blocks
interface GithubLink {
    name: string;
    url: string;
    icon: string;
}

interface Poster {
    id: string;
    name: string;
    subheading: string;
    img: string;
    description: string;
    technology: technology;
}

interface WordPressProject {
    id: string;
    name: string;
    description: string;
    img: string;
    githubLink: GithubLink;
    technology: technology[];
}

interface Animation {
    id: string;
    name: string;
    description: string;
    sourceMobile: string;
    sourceDesktop: string;
    technology: technology[];
}

interface technology {
    name: string;
    icon: string;
}

export interface OtherProjects {
    posters: Poster[];
    wordpress: WordPressProject[];
    animations: Animation[];
}
