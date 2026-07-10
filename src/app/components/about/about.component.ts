import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { LocaleStore } from '../../core/state/locale.store';

@Component({
  selector: 'app-about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  private readonly localeStore = inject(LocaleStore);

  readonly text = this.localeStore.ui;
  readonly profile = computed(() => this.localeStore.resume().profile);
}
