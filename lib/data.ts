import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import projectPic2 from "@/public/projectPic2.png"
import { useTranslation } from 'next-i18next'


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
    location: t("Estácio"),
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
      "Developed a full-stack web application, implemented features for browsing, CRUD operations, and sorting books by author, title, or favorites.",
    tags: ["React", "API", "PostgreSQL", "CSS", "Nodejs", "Express"],
    imageUrl: projectPic2
  },
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
