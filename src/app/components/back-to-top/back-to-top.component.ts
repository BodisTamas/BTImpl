import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { fromEvent, map, startWith } from 'rxjs';
import { IconComponent } from '../icon/icon.component';
import { LocaleStore } from '../../core/state/locale.store';

const SCROLL_VISIBILITY_THRESHOLD = 400;

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.scss',
})
export class BackToTopComponent {
  private readonly localeStore = inject(LocaleStore);

  readonly text = this.localeStore.ui;

  readonly visible = toSignal(
    fromEvent(window, 'scroll').pipe(
      map(() => window.scrollY > SCROLL_VISIBILITY_THRESHOLD),
      startWith(false),
    ),
    { initialValue: false },
  );

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
