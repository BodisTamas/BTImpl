import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { IconComponent, techIcon } from '../icon/icon.component';
import { LocaleStore } from '../../core/state/locale.store';

@Component({
  selector: 'app-skills',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  private readonly localeStore = inject(LocaleStore);

  readonly text = this.localeStore.ui;
  readonly skillGroups = computed(() => this.localeStore.resume().skillGroups);
  readonly certificates = computed(() => this.localeStore.resume().certificates);
  readonly techIcon = techIcon;
}
