import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LocaleStore } from './core/state/locale.store';
import { HeroComponent } from './components/hero/hero.component';
import { StatsComponent } from './components/stats/stats.component';
import { ServicesComponent } from './components/services/services.component';
import { WorkComponent } from './components/work/work.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NavbarComponent,
    HeroComponent,
    StatsComponent,
    ServicesComponent,
    WorkComponent,
    ProjectsComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,
    BackToTopComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  private readonly localeStore = inject(LocaleStore);

  constructor() {
    effect(() => {
      document.documentElement.lang = this.localeStore.locale();
    });
  }
}
