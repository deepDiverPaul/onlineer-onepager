import {Component} from "@vue/runtime-core";

export interface Section {
    label: string
    id: string
    component: string
}

const sections: Section[] = [
    {
        label: "Onlineer",
        id: 'start',
        component: 'sectionStart',
    },
    {
        label: 'Tech Stack',
        id: 'techstack',
        component: 'sectionTechStack',
    },
    {
        label: 'References',
        id: 'references',
        component: 'sectionReferences'
    },
    {
        label: 'About',
        id: 'about',
        component: 'sectionAbout'
    }
]

export default () => sections
