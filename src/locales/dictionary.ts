import { en } from "@/locales/en";
import { zh } from "@/locales/zh";

export const dictionary = { zh, en } as const;

export type Language = keyof typeof dictionary;
