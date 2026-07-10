export type Locale = 'en' | 'hu';

export const DEFAULT_LOCALE: Locale = 'en';
export const LOCALE_STORAGE_KEY = 'btimpl-locale';

export interface UiText {
  nav: {
    experiences: string;
    publications: string;
    projects: string;
    about: string;
    skills: string;
    contact: string;
  };
  aria: {
    toggleNav: string;
    switchLocale: string;
    scrollToTop: string;
  };
  hero: {
    ctaPrimary: string;
    ctaSecondary: string;
  };
  sections: {
    projects: string;
  };
  about: {
    connectLinkedin: string;
  };
  skills: {
    skillsTitle: string;
    certificatesTitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
  };
  footer: {
    rights: string;
  };
}

const EN_UI: UiText = {
  nav: {
    experiences: 'Experiences',
    publications: 'Publications',
    about: 'About Me',
    skills: 'Skills & Certificates',
    projects: 'Projects',
    contact: 'Contact',
  },
  aria: {
    toggleNav: 'Toggle navigation',
    switchLocale: 'Switch language',
    scrollToTop: 'Scroll to top',
  },
  hero: {
    ctaPrimary: 'Start a Conversation',
    ctaSecondary: 'Work & Projects',
  },
  sections: {
    projects: 'Projects',
  },
  about: {
    connectLinkedin: 'LinkedIn',
  },
  skills: {
    skillsTitle: 'Skills',
    certificatesTitle: 'Certificates',
  },
  contact: {
    title: 'Ready for Quality Development?',
    subtitle: "Let's talk about your project.",
  },
  footer: {
    rights: 'All rights reserved.',
  },
};

const HU_UI: UiText = {
  nav: {
    experiences: 'Tapasztalatok',
    publications: 'Publikációk',
    about: 'Rólam',
    skills: 'Készségek és minősítések',
    projects: 'Projektek',
    contact: 'Kapcsolat',
  },
  aria: {
    toggleNav: 'Navigáció megnyitása',
    switchLocale: 'Nyelv váltása',
    scrollToTop: 'Vissza a tetejére',
  },
  hero: {
    ctaPrimary: 'Beszélgessünk',
    ctaSecondary: 'Munkáim és projektjeim',
  },
  sections: {
    projects: 'Projektek',
  },
  about: {
    connectLinkedin: 'LinkedIn',
  },
  skills: {
    skillsTitle: 'Készségek',
    certificatesTitle: 'Minősítések',
  },
  contact: {
    title: 'Készen áll a minőségi fejlesztésre?',
    subtitle: 'Beszéljünk a projektjéről.',
  },
  footer: {
    rights: 'Minden jog fenntartva.',
  },
};

export const UI_TEXT: Record<Locale, UiText> = {
  en: EN_UI,
  hu: HU_UI,
};

/** ISO 3166-1 alpha-2 country codes used to fetch flag images from flagcdn.com. */
export const LOCALE_FLAG_CODE: Record<Locale, string> = {
  en: 'gb',
  hu: 'hu',
};
