import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { IconComponent } from '../icon/icon.component';
import { UiStore } from '../../core/state/ui.store';
import { LocaleStore } from '../../core/state/locale.store';
import { LOCALE_FLAG_CODE } from '../../core/i18n/translations';

@Component({
  selector: 'app-navbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LogoComponent, IconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private readonly uiStore = inject(UiStore);
  private readonly localeStore = inject(LocaleStore);

  readonly mobileNavOpen = this.uiStore.mobileNavOpen;
  readonly locale = this.localeStore.locale;
  readonly text = this.localeStore.ui;
  readonly profile = computed(() => this.localeStore.resume().profile);
  readonly publications = computed(() => this.localeStore.resume().publications);
  readonly nextLocaleFlagCode = computed(() => LOCALE_FLAG_CODE[this.locale() === 'en' ? 'hu' : 'en']);

  toggleMobileNav(): void {
    this.uiStore.toggleMobileNav();
  }

  closeMobileNav(): void {
    this.uiStore.closeMobileNav();
  }

  toggleLocale(): void {
    this.localeStore.toggleLocale();
  }
}
