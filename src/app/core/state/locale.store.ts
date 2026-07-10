import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { DEFAULT_LOCALE, Locale, LOCALE_STORAGE_KEY, UI_TEXT } from '../i18n/translations';
import { RESUME_DATA } from '../../data/resume.data';

interface LocaleState {
  locale: Locale;
}

function isLocale(value: string | null): value is Locale {
  return value === 'en' || value === 'hu';
}

function detectInitialLocale(): Locale {
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
  return isLocale(stored) ? stored : DEFAULT_LOCALE;
}

export const LocaleStore = signalStore(
  { providedIn: 'root' },
  withState<LocaleState>({ locale: detectInitialLocale() }),
  withComputed(({ locale }) => ({
    ui: computed(() => UI_TEXT[locale()]),
    resume: computed(() => RESUME_DATA[locale()]),
  })),
  withMethods((store) => ({
    setLocale(locale: Locale): void {
      patchState(store, { locale });
      localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    },
    toggleLocale(): void {
      const next: Locale = store.locale() === 'en' ? 'hu' : 'en';
      patchState(store, { locale: next });
      localStorage.setItem(LOCALE_STORAGE_KEY, next);
    },
  })),
);
