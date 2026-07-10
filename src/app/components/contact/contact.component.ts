import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { LocaleStore } from '../../core/state/locale.store';

@Component({
  selector: 'app-contact',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly localeStore = inject(LocaleStore);

  readonly text = this.localeStore.ui;
  readonly profile = computed(() => this.localeStore.resume().profile);
}
