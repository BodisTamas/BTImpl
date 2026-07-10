import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { IconComponent, techIcon } from '../icon/icon.component';
import { LocaleStore } from '../../core/state/locale.store';

@Component({
  selector: 'app-projects',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private readonly localeStore = inject(LocaleStore);

  readonly text = this.localeStore.ui;
  readonly projects = computed(() => this.localeStore.resume().projects);
  readonly techIcon = techIcon;
}
