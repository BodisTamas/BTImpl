import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { LocaleStore } from '../../core/state/locale.store';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LogoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private readonly localeStore = inject(LocaleStore);

  readonly text = this.localeStore.ui;
  readonly profile = computed(() => this.localeStore.resume().profile);
  readonly year = new Date().getFullYear();
}
