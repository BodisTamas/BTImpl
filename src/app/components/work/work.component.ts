import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LocaleStore } from '../../core/state/locale.store';

@Component({
  selector: 'app-work',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  private readonly localeStore = inject(LocaleStore);

  readonly text = this.localeStore.ui;
  readonly publications = computed(() => this.localeStore.resume().publications);
}
