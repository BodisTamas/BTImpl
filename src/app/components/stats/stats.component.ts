import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LocaleStore } from '../../core/state/locale.store';

@Component({
  selector: 'app-stats',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
})
export class StatsComponent {
  private readonly localeStore = inject(LocaleStore);

  readonly stats = computed(() => this.localeStore.resume().stats);
}
