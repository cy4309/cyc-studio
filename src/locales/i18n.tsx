"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { dictionary, type Language } from "@/locales/dictionary";

type DictionaryNode = Record<string, unknown>;

type I18nContextValue = {
  lang: Language;
  setLang: Dispatch<SetStateAction<Language>>;
  t: (path: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function getText(lang: Language, path: string): string {
  const segments = path.split(".");
  let current: unknown = dictionary[lang] as DictionaryNode;

  for (const segment of segments) {
    if (typeof current !== "object" || current === null) {
      return path;
    }
    current = (current as DictionaryNode)[segment];
  }

  return typeof current === "string" ? current : path;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("zh");

  const value = useMemo<I18nContextValue>(() => {
    return {
      lang,
      setLang,
      t: (path: string) => getText(lang, path),
    };
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
