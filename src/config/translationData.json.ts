/**
 * * Configuration of the i18n system data files and text translations
 * Example translations below are for English and French, with textTranslations used in src/layouts/BlogLayoutCenter.astro and src/components/Hero/[hero].astro
 */

/**
 * * Data file configuration for the i18n system
 * Every {Data} key must exist in the below object
 */
import testimonialDataHi from "./hi/testimonialData.json";
import teamDataHi from "./hi/teamData.json";
import faqDataHi from "./hi/faqData.json";
import navDataHi from "./hi/navData.json";
import siteDataHi from "./hi/siteData.json";
import testimonialDataPa from "./pa/testimonialData.json";
import teamDataPa from "./pa/teamData.json";
import faqDataPa from "./pa/faqData.json";
import navDataPa from "./pa/navData.json";
import siteDataPa from "./pa/siteData.json";
import testimonialDataTl from "./tl/testimonialData.json";
import teamDataTl from "./tl/teamData.json";
import faqDataTl from "./tl/faqData.json";
import navDataTl from "./tl/navData.json";
import siteDataTl from "./tl/siteData.json";
import testimonialDataMs from "./ms/testimonialData.json";
import teamDataMs from "./ms/teamData.json";
import faqDataMs from "./ms/faqData.json";
import navDataMs from "./ms/navData.json";
import siteDataMs from "./ms/siteData.json";
import testimonialDataTh from "./th/testimonialData.json";
import teamDataTh from "./th/teamData.json";
import faqDataTh from "./th/faqData.json";
import navDataTh from "./th/navData.json";
import siteDataTh from "./th/siteData.json";
import testimonialDataId from "./id/testimonialData.json";
import teamDataId from "./id/teamData.json";
import faqDataId from "./id/faqData.json";
import navDataId from "./id/navData.json";
import siteDataId from "./id/siteData.json";
import testimonialDataKo from "./ko/testimonialData.json";
import teamDataKo from "./ko/teamData.json";
import faqDataKo from "./ko/faqData.json";
import navDataKo from "./ko/navData.json";
import siteDataKo from "./ko/siteData.json";
import testimonialDataJa from "./ja/testimonialData.json";
import teamDataJa from "./ja/teamData.json";
import faqDataJa from "./ja/faqData.json";
import navDataJa from "./ja/navData.json";
import siteDataJa from "./ja/siteData.json";
import testimonialDataZh from "./zh/testimonialData.json";
import teamDataZh from "./zh/teamData.json";
import faqDataZh from "./zh/faqData.json";
import navDataZh from "./zh/navData.json";
import siteDataZh from "./zh/siteData.json";
import testimonialDataVi from "./vi/testimonialData.json";
import teamDataVi from "./vi/teamData.json";
import faqDataVi from "./vi/faqData.json";
import navDataVi from "./vi/navData.json";
import siteDataVi from "./vi/siteData.json";
import siteDataEn from "./en/siteData.json";
import navDataEn from "./en/navData.json";
import faqDataEn from "./en/faqData.json";
import teamDataEn from "./en/teamData.json";
import testimonialDataEn from "./en/testimonialData.json";

export const dataTranslations = {
  hi: {
    siteData: siteDataHi,
    navData: navDataHi,
    faqData: faqDataHi,
    teamData: teamDataHi,
    testimonialData: testimonialDataHi,
  },
  pa: {
    siteData: siteDataPa,
    navData: navDataPa,
    faqData: faqDataPa,
    teamData: teamDataPa,
    testimonialData: testimonialDataPa,
  },
  tl: {
    siteData: siteDataTl,
    navData: navDataTl,
    faqData: faqDataTl,
    teamData: teamDataTl,
    testimonialData: testimonialDataTl,
  },
  ms: {
    siteData: siteDataMs,
    navData: navDataMs,
    faqData: faqDataMs,
    teamData: teamDataMs,
    testimonialData: testimonialDataMs,
  },
  th: {
    siteData: siteDataTh,
    navData: navDataTh,
    faqData: faqDataTh,
    teamData: teamDataTh,
    testimonialData: testimonialDataTh,
  },
  id: {
    siteData: siteDataId,
    navData: navDataId,
    faqData: faqDataId,
    teamData: teamDataId,
    testimonialData: testimonialDataId,
  },
  ko: {
    siteData: siteDataKo,
    navData: navDataKo,
    faqData: faqDataKo,
    teamData: teamDataKo,
    testimonialData: testimonialDataKo,
  },
  ja: {
    siteData: siteDataJa,
    navData: navDataJa,
    faqData: faqDataJa,
    teamData: teamDataJa,
    testimonialData: testimonialDataJa,
  },
  zh: {
    siteData: siteDataZh,
    navData: navDataZh,
    faqData: faqDataZh,
    teamData: teamDataZh,
    testimonialData: testimonialDataZh,
  },
  vi: {
    siteData: siteDataVi,
    navData: navDataVi,
    faqData: faqDataVi,
    teamData: teamDataVi,
    testimonialData: testimonialDataVi,
  },
	en: {
		siteData: siteDataEn,
		navData: navDataEn,
		faqData: faqDataEn,
		teamData: teamDataEn,
		testimonialData: testimonialDataEn,
	},
	
} as const;

/**
 * * Text translations are used with the `useTranslation` function from src/js/i18nUtils.ts to translate various strings on your site.
 *
 * ## Example
 *
 * ```ts
 * import { getLocaleFromUrl } from "@js/localeUtils";
 * import { useTranslations } from "@js/translationUtils";
 * const currLocale = getLocaleFromUrl(Astro.url);
 * const t = useTranslations(currLocale);
 * t("back_to_all_posts"); // this would be "Retour à tous les articles" if the current locale is "fr"
 * ```
 * or
 * ```ts
 * import { useTranslations } from "@js/translationUtils";
 * const t = useTranslations("fr");
 * t("back_to_all_posts"); // this would be "Retour à tous les articles"
 * ```
 */
export const textTranslations = {
	en: {
		hero_text: "Build a Personalized Anime Story Book!",
		hero_description:
		  "Design your dream anime world! Create personalized avatars, develop epic storylines, and bring your own anime-inspired story to life.",
		back_to_all_posts: "Back to all posts",
		hero_button_text: "Get Started",
		hero_button_right_text: "Features",
		updated: "Updated",
	  },
	  hi: {
		hero_text: "एक व्यक्तिगत एनीमे कहानी पुस्तक बनाएं!",
		hero_description:
		  "अपनी सपनों की एनीमे दुनिया डिज़ाइन करें! व्यक्तिगत अवतार बनाएं, महाकाव्य कथानक विकसित करें, और अपनी खुद की एनीमे-प्रेरित कहानी को जीवन में लाएं।",
		back_to_all_posts: "सभी पोस्ट पर वापस जाएं",
		hero_button_text: "शुरू करें",
		hero_button_right_text: "विशेषताएँ",
		updated: "अद्यतन",
	  },
	  pa: {
		hero_text: "ਇੱਕ ਵਿਅਕਤੀਗਤ ਐਨੀਮੇ ਕਹਾਣੀ ਪੁਸਤਕ ਬਣਾਓ!",
		hero_description:
		  "ਆਪਣੀ ਸੁਪਨਾ ਐਨੀਮੇ ਦੁਨੀਆ ਡਿਜ਼ਾਈਨ ਕਰੋ! ਵਿਅਕਤੀਗਤ ਅਵਤਾਰ ਬਣਾਓ, ਮਹਾਕਾਵਿਕ ਕਹਾਣੀਆਂ ਵਿਕਸਤ ਕਰੋ, ਅਤੇ ਆਪਣੀ ਆਪਣੀ ਐਨੀਮੇ-ਪ੍ਰੇਰਿਤ ਕਹਾਣੀ ਨੂੰ ਜੀਵੰਤ ਬਣਾਓ।",
		back_to_all_posts: "ਸਭ ਪੋਸਟਾਂ 'ਤੇ ਵਾਪਸ ਜਾਓ",
		hero_button_text: "ਸ਼ੁਰੂ ਕਰੋ",
		hero_button_right_text: "ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ",
		updated: "ਅੱਪਡੇਟ ਕੀਤਾ",
	  },
	  tl: {
		hero_text: "Bumuo ng Isang Personalized Anime Story Book!",
		hero_description:
		  "Idisenyo ang iyong pangarap na mundo ng anime! Lumikha ng mga personalized na avatar, bumuo ng mga epikong kuwento, at buhayin ang iyong sariling anime-inspired na kuwento.",
		back_to_all_posts: "Bumalik sa lahat ng mga post",
		hero_button_text: "Magsimula",
		hero_button_right_text: "Mga Tampok",
		updated: "Na-update",
	  },
	  ms: {
		hero_text: "Bina Buku Cerita Anime Peribadi Anda!",
		hero_description:
		  "Reka bentuk dunia anime impian anda! Cipta avatar peribadi, bangunkan jalan cerita epik, dan hidupkan kisah anime anda sendiri.",
		back_to_all_posts: "Kembali ke semua siaran",
		hero_button_text: "Mula",
		hero_button_right_text: "Ciri-ciri",
		updated: "Dikemaskini",
	  },
	  th: {
		hero_text: "สร้างหนังสือเรื่องราวอนิเมะส่วนตัวของคุณ!",
		hero_description:
		  "ออกแบบโลกอะนิเมะในฝันของคุณ! สร้างอวตารส่วนตัว พัฒนาโครงเรื่องที่น่าตื่นเต้น และทำให้เรื่องราวที่ได้รับแรงบันดาลใจจากอะนิเมะของคุณมีชีวิตขึ้นมา",
		back_to_all_posts: "กลับไปที่โพสต์ทั้งหมด",
		hero_button_text: "เริ่มต้น",
		hero_button_right_text: "คุณสมบัติ",
		updated: "อัปเดต",
	  },
	  id: {
		hero_text: "Buat Buku Cerita Anime yang Dipersonalisasi!",
		hero_description:
		  "Rancang dunia anime impian Anda! Buat avatar yang dipersonalisasi, kembangkan alur cerita epik, dan hadirkan kisah anime yang terinspirasi oleh Anda sendiri.",
		back_to_all_posts: "Kembali ke semua postingan",
		hero_button_text: "Mulai",
		hero_button_right_text: "Fitur",
		updated: "Diperbarui",
	  },
	  ko: {
		hero_text: "개인 맞춤형 애니메이션 스토리북 만들기!",
		hero_description:
		  "당신만의 꿈의 애니메이션 세계를 디자인하세요! 맞춤형 아바타를 만들고, 서사를 개발하며, 당신만의 애니메이션 영감을 받은 이야기를 만들어 보세요.",
		back_to_all_posts: "모든 게시물로 돌아가기",
		hero_button_text: "시작하기",
		hero_button_right_text: "특징",
		updated: "업데이트됨",
	  },
	  ja: {
		hero_text: "パーソナライズされたアニメストーリーブックを作ろう！",
		hero_description:
		  "あなたの夢のアニメの世界をデザインしよう！パーソナライズされたアバターを作成し、壮大なストーリーを展開し、自分だけのアニメ風ストーリーを生み出そう。",
		back_to_all_posts: "すべての投稿に戻る",
		hero_button_text: "始める",
		hero_button_right_text: "特徴",
		updated: "更新済み",
	  },
	  zh: {
		hero_text: "创建个性化动漫故事书！",
		hero_description:
		  "设计你的梦想动漫世界！创建个性化头像，发展史诗般的故事情节，并让你的动漫灵感故事成为现实。",
		back_to_all_posts: "返回所有帖子",
		hero_button_text: "开始",
		hero_button_right_text: "功能",
		updated: "已更新",
	  },
	  vi: {
		hero_text: "Tạo Sách Truyện Anime Cá Nhân Hóa!",
		hero_description:
		  "Thiết kế thế giới anime trong mơ của bạn! Tạo avatar cá nhân hóa, phát triển cốt truyện hoành tráng, và mang câu chuyện anime độc đáo của bạn vào cuộc sống.",
		back_to_all_posts: "Quay lại tất cả bài viết",
		hero_button_text: "Bắt đầu",
		hero_button_right_text: "Tính năng",
		updated: "Đã cập nhật",
	  },
	
} as const;

/**
 * * Route translations are used to translate route names for the language switcher component
 * This can be useful for SEO reasons. The key does not matter, it just needs to match between languages
 *
 * ## Examples
 *
 * These routes must be everything after the base domain. So if this is "atlas.com/blog", the route would be "blog"
 * Or if this is "atlas.com/blog/my-post", the route would be "blog/my-post"
 */
export const routeTranslations = {
  en: {
    aboutKey: "about",
  },
  hi: {
    aboutKey: "हमारे-बारे-में",
  },
  id: {
    aboutKey: "tentang",
  },
  ja: {
    aboutKey: "私たちについて",
  },
  ko: {
    aboutKey: "소개",
  },
  ms: {
    aboutKey: "tentang-kami",
  },
  pa: {
    aboutKey: "ਸਾਡੇ-ਬਾਰੇ",
  },
  th: {
    aboutKey: "เกี่ยวกับ",
  },
  tl: {
    aboutKey: "tungkol",
  },
  vi: {
    aboutKey: "gioi-thieu",
  },
  zh: {
    aboutKey: "关于",
  },
} as const;
