import { ExperienceData } from "./types";

export const translateExperienceData = (data: ExperienceData[], t: (key: string) => string): ExperienceData[] => {
  return data.map(item => ({
    ...item,
    title: t(item.title),
    location: t(item.location),
    description: t(item.description),
  }));
};
