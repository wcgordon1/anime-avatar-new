/**
 * Global site settings
 */

import { type SiteSettingsProps } from "./types/configDataTypes";

// The below locales need to match what you've put in your `astro.config.mjs` file
export const locales = ["vi", "zh", "ja", "ko", "id", "th", "ms", "tl", "pa", "hi", "en"] as const;
export const defaultLocale = "en" as const;

// localeMap is used to map languages to their respective locales - used for formatDate function
export const localeMap = {
  en: "en-US",
  hi: "hi",
  id: "id",
  ja: "ja",
  ko: "ko",
  ms: "ms",
  pa: "pa",
  th: "th",
  tl: "tl",
  vi: "vi",
  zh: "zh",
	
} as const;

// text to show in the language switcher for each locale
export const languageSwitcherMap = {
  en: "🇺🇸 English",
  hi: "🇮🇳 हिन्दी",
  id: "🇮🇩 Indonesian",
  ja: "🇯🇵 日本語",
  ko: "🇰🇷 한국어",
  ms: "🇲🇾 Melayu",
  pa: "🇵🇰 ਪੰਜਾਬੀ",
  th: "🇹🇭 ภาษาไทย",
  tl: "🇵🇭 Tagalog",
  vi: "🇻🇳 Tiếng Việt",
  zh: "🇨🇳 中文",
	
	// en: "English",
	// 
} as const;

// site settings that don't change between languages
export const siteSettings: SiteSettingsProps = {
	useViewTransitions: true,
	useAnimations: true,
};

export default siteSettings;
