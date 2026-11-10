import { cvData } from "@/data/cvData";
import { cvDataEn } from "@/data/cvData.en";
import type { CVData } from "@/types/cv";
import type { Lang } from "@/i18n/translations";

export const getCvData = (lang: Lang): CVData => (lang === "en" ? cvDataEn : cvData);
