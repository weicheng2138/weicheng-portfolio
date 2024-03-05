import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import commonEn from '@/locales/en/common.json';
import commonZh from '@/locales/zh/common.json';
import projectsEn from '@/locales/en/projects.json';
import projectsZh from '@/locales/zh/projects.json';

const resources = {
  en: {
    common: commonEn,
    projects: projectsEn,
  },
  zh: {
    common: commonZh,
    projects: projectsZh,
  },
};
i18n.use(initReactI18next).use(LanguageDetector).init({
  resources,
  fallbackLng: 'en',
});
