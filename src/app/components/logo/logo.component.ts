import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * The BTImpl mark — two stacked capsule strokes forming a geometric "B".
 * Gradients are scoped with unique ids so multiple instances render correctly.
 */
@Component({
  selector: 'app-logo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
})
export class LogoComponent {
  readonly height = input(64);

  private static counter = 0;
  private readonly uid = ++LogoComponent.counter;
  readonly topId = `bt-top-${this.uid}`;
  readonly botId = `bt-bot-${this.uid}`;
}
