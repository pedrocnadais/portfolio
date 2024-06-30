import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import projectPic2 from "@/public/projectPic2.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Computer Science",
    location: "Estácio",
    description:
      "Completing the studies of Computer Science with University Estácio from Brazil. Completion will be in 2028",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Full-stack project",
    location: "",
    description: "Developed a full-stack web application using ReactJS, Node.js with Express, and PostgreSQL. Implemented features for browsing, CRUD operations, and sorting books by author, title, or favorites.",
    icon: React.createElement(FaReact),
    date: "",
  },
  {
    title: "SEO Specialist",
    location: "Brazil",
    description:
      "Optimized a women's haircare website using SEO (Search Engine Optimization). Conducted keyword research, created high-quality content, and implemented on-page optimization techniques.",
    icon: React.createElement(CgWorkAlt),
    date: "",
  },
  {
    title: "Sales",
    location: "Texas, USA",
    description:
      "Conducted door-to-door sales, managed customer interactions, facilitated insurance claims, and handled financial transactions. Also took care of repair and car rental appointments.",
      icon: React.createElement(CgWorkAlt),
      date: "",
  },
  {
    title: "Ecommerce Owner",
    location: "Brazil",
    description:
      "Ran an e-commerce store for household essentials using Shopify. Responsibilities included sourcing products, writing descriptions, and managing ads on Google and Facebook. Handled product purchasing, supplier communication, shipping processes, and payment operations.",
      icon: React.createElement(CgWorkAlt),
      date: "",
  },
] as const;

export const projectsData = [
  {
    title: "Book Library",
    description:
      "Developed a full-stack web application, implemented features for browsing, CRUD operations, and sorting books by author, title, or favorites.",
    tags: ["React", "API", "PostgreSQL", "CSS", "Nodejs", "Express"],
    imageUrl: projectPic2
  },
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: rmtdevImg,
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsimg,
  // },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Languages",
  "Statistics",
] as const;