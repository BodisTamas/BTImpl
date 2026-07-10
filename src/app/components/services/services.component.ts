import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LocaleStore } from '../../core/state/locale.store';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-services',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  private readonly localeStore = inject(LocaleStore);

  readonly text = this.localeStore.ui;
  readonly services = computed(() => this.localeStore.resume().services);
}
