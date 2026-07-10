import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { IconComponent } from '../icon/icon.component';
import { LocaleStore } from '../../core/state/locale.store';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LogoComponent, IconComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  private readonly localeStore = inject(LocaleStore);

  readonly text = this.localeStore.ui;
  readonly profile = computed(() => this.localeStore.resume().profile);
}
