"use client";

import { useI18n } from "@/locales/i18n";

export default function Text({ path }: { path: string }) {
  const { t } = useI18n();
  return <>{t(path)}</>;
}
