'use client';
import { useLang } from '../_contexts/LangContext';
import { translationsEn } from '../_lang/en';
import { translationsId } from '../_lang/id';

export const useTranslations = () => {
  const { lang } = useLang();
  return lang === 'en' ? translationsEn : translationsId;
};
