import { links } from './data'

export type SectionName = (typeof links)[number]['name'];

export interface ExperienceData {
 title: string;
 location: string;
 description: string;
 date: string;
 icon: JSX.Element;
}