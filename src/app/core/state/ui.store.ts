import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

interface UiState {
  mobileNavOpen: boolean;
}

const initialState: UiState = {
  mobileNavOpen: false,
};

export const UiStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    toggleMobileNav(): void {
      patchState(store, { mobileNavOpen: !store.mobileNavOpen() });
    },
    closeMobileNav(): void {
      patchState(store, { mobileNavOpen: false });
    },
  })),
);
