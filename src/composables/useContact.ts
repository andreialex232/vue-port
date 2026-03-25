import { ref } from "vue"
import email from "@/assets/svgs/email.svg"
import github from "@/assets/svgs/github.svg"
import instagram from "@/assets/svgs/instagram.svg"
import linkedin from "@/assets/svgs/linkedin.svg"
import phone from "@/assets/svgs/phone.svg"

export const useContact = () => {
    const contactMethods = ref<ContactList[]> ([
        {
            name: "Phone",
            description: "+45 91 72 87 89",
            iconOnly: false,
            link: "tel:+4591728789",
            svg: phone
        },
        {
            name: "Email",
            description: "vatuialexx@gmail.com",
            iconOnly: false,
            link: "mailto:vatuialexx@gmail.com",
            svg: email
        },
        {
            name: "LinkedIn",
            description: "LinkedIn Icon",
            iconOnly: true,
            svg: linkedin,
            link: "https://www.linkedin.com/in/alex-vatui-9518442a5/"
        },
        {
            name: "Github",
            description: "Github Icon",
            iconOnly: true,
            svg: github,
            link: "https://github.com/andreialex232"
        },
        {
            name: "Instagram",
            description: "Instagram Icon",
            iconOnly: true,
            svg: instagram,
            link: "https://www.instagram.com/alex010524/"
        },
    ])
    return { contactMethods } 
}

interface ContactList {
    name: string,
    description: string,
    iconOnly: boolean,
    link?: string
    svg: string
}