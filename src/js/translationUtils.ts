import { getRelativeLocaleUrl } from "astro:i18n";

// data
import {
	textTranslations,
	dataTranslations,
	routeTranslations,
} from "@config/translationData.json";
import { locales, defaultLocale } from "@config/siteSettings.json";

/**
 * * text translation helper function
 * @param locale: Language to use for translation, one of the locales
 * @returns function you can use to translate strings according to the src/config/translations.json file
 *
 * ## Example
 *
 * ```ts
 * import { useTranslations, getLocaleFromUrl } from "@js/i18nUtils";
 * const currLocale = getLocaleFromUrl(Astro.url);
 * const t = useTranslations(currLocale);
 * t("blog.time"); // translated string for key "blog.time" in the current locale
 * ```
 */
export function useTranslations(locale: keyof typeof textTranslations) {
	return function t(key: keyof (typeof textTranslations)[typeof locale]) {
		return textTranslations[locale][key] || textTranslations[defaultLocale][key];
	};
}

type Locale = keyof typeof dataTranslations;
type DataKey<T extends Locale> = keyof (typeof dataTranslations)[T];
/**
 * * data file translation helper function
 * @param data: key in the data file to translate, like "siteData" or "navData"
 * @param locale: Language to use for translation, one of the locales
 * @returns appropriate data file as specified in src/config/i18nData.json.ts
 *
 * ## Example
 *
 * ```ts
 * import { getLocaleFromUrl } from "@js/i18nUtils";
 * import { getTranslatedData } from "@js/translations";
 * const currLocale = getLocaleFromUrl(Astro.url);
 * const siteData = getTranslatedData("siteData", currLocale);
 * ```
 */
export function getTranslatedData<T extends Locale, K extends DataKey<T>>(
	data: K,
	locale: T,
): (typeof dataTranslations)[T][K] {
	return dataTranslations[locale][data] || dataTranslations[defaultLocale as T][data];
}

/**
 * * take in a language (ex "de"), and the current URL, and return correct URL for the passed language
 * This is really only used in the language switcher component
 *
 * @param locale: new language
 * @param url: current URL (Astro.url)
 * @returns new URL pathname as a string
 */
export function getLocalizedPathname(locale: (typeof locales)[number], url: URL): string {
	// Only log when debugging is needed
	const DEBUG = false;
	
	if (DEBUG) {
		console.log('=== Debug getLocalizedPathname ===');
		console.log('Initial URL:', url.pathname);
		console.log('Target locale:', locale);
	}

	// Handle root paths
	if (url.pathname === "/" || url.pathname === "" || url.pathname.match(/^\/[a-z]{2}\/$/)) {
		return getRelativeLocaleUrl(locale, "");
	}

	const [, lang, ...rest] = url.pathname.split("/");
	let oldPath: string, currLocale: (typeof locales)[number];
	
	//@ts-ignore
	if (locales.includes(lang)) {
		oldPath = rest.join("/");
		currLocale = lang as (typeof locales)[number];
	} else {
		oldPath = url.pathname;
		currLocale = defaultLocale;
	}

	const routeStringTrimmed = oldPath.replace(/\/$/, "").replace(/^\//, "");
	const routeTranslationsKey = getKeyByValue(routeTranslations[currLocale], routeStringTrimmed);
	const translatedRoute = routeTranslationsKey
		? routeTranslations[locale][routeTranslationsKey]
		: routeStringTrimmed;

	return getRelativeLocaleUrl(locale, translatedRoute);
}

// Add this helper function
function getKeyByValue(object: Record<string, string>, value: string): string | undefined {
	return Object.keys(object).find(key => object[key] === value);
}
