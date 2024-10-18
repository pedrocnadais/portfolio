import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import libraryPic from "@/public/libraryPic.png"
import { useTranslation } from 'next-i18next'
import extensionProjectPic2 from '@/public/extensionProjectPic2.png'
import instagramProjectPic from '@/public/instagramProjectPic.png'


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

export const useExperiencesData = () => {
  const { t } = useTranslation('data');

  const experiencesData = [
  {
    title: t("Computer Science"),
    location: t("Estacio"),
    description:
      t("description_computer_science"),
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: t("Full-stack project"),
    location: "",
    description: t("description_full_stack"),
    icon: React.createElement(FaReact),
    date: "",
  },
  {
    title: t("SEO Specialist"),
    location: t("Brazil"),
    description:
      t("description_seo_specialist"),
    icon: React.createElement(CgWorkAlt),
    date: "",
  },
  {
    title: t("Sales"),
    location: t("Texas, USA"),
    description:
      t("description_sales"),
      icon: React.createElement(CgWorkAlt),
      date: "",
  },
  {
    title: t("Ecommerce Owner"),
    location: t("Brazil"),
    description:
      t("description_ecommerce_owner"),
      icon: React.createElement(CgWorkAlt),
      date: "",
  },
];
return experiencesData
};


export const projectsData = [
  {
    title: "Book Library",
    description:
      "Developed a fullstack web application, with features for browsing and sorting books. It also does web scrapping, when new books are inserted in the database, for image and links.",
    tags: ["Nextjs", "API", "PostgreSQL", "Tailwind CSS", "Nodejs", "Express", "Web Scrapping"],
    imageUrl: libraryPic
  },
  {
    title: "Video Downloader Chrome Extension",
    description:
      "Created a Google Chrome extension that lets you download videos in WEBM if in a blob or MP4 if there's a link available.",
    tags: ["JavaScript", "Video Download", "Chrome API", "Stream Capture", "Browser Extension"],
    imageUrl: extensionProjectPic2
  },
  {
    title: "Instagram Clone",
    description:
      "Created an Instagram Clone where you can create an account, follow users and like pictures.",
    tags: ["NextJS", "TypeScript", "Firebase", "PostgreSQL", "Chakra UI"],
    imageUrl: instagramProjectPic
  },
] as const;


export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Problem Solving",
  "PostgreSQL",
  "Git",
  "Node.js",
  "Tailwind CSS",
  "MongoDB",
  "Express",
  "Languages",
  "Statistics",
  "Docker",
  "Vite",
  "Firebase",
  "Chakra UI",
] as const;
