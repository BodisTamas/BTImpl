import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName =
  | 'linkedin'
  | 'mail'
  | 'tech'
  | 'java'
  | 'spring'
  | 'springboot'
  | 'kafka'
  | 'openshift'
  | 'angular'
  | 'docker'
  | 'thymeleaf'
  | 'nodes'
  | 'api'
  | 'server'
  | 'database'
  | 'globe'
  | 'sparkle'
  | 'cycle'
  | 'chevronUp'
  | 'mentor'
  | 'javascript'
  | 'typescript'
  | 'security'
  | 'ldap'
  | 'mq'
  | 'postgresql'
  | 'mysql'
  | 'podman'
  | 'tomcat'
  | 'gitlab'
  | 'bitbucket'
  | 'jira'
  | 'confluence';

/** Font Awesome Free ships an authentic brand mark for these (or a fitting generic glyph). */
const FA_ICON_CLASS: Partial<Record<IconName, string>> = {
  linkedin: 'fa-brands fa-linkedin-in',
  mail: 'fa-solid fa-envelope',
  tech: 'fa-solid fa-code',
  java: 'fa-brands fa-java',
  angular: 'fa-brands fa-angular',
  docker: 'fa-brands fa-docker',
  nodes: 'fa-solid fa-diagram-project',
  api: 'fa-solid fa-plug',
  server: 'fa-solid fa-server',
  database: 'fa-solid fa-database',
  globe: 'fa-solid fa-globe',
  sparkle: 'fa-solid fa-wand-magic-sparkles',
  cycle: 'fa-solid fa-arrows-rotate',
  chevronUp: 'fa-solid fa-chevron-up',
  mentor: 'fa-solid fa-chalkboard-user',
  security: 'fa-solid fa-shield-halved',
  ldap: 'fa-solid fa-address-book',
  mq: 'fa-solid fa-right-left',
};

/**
 * Font Awesome Free has no real logo for these, so the authentic mark is fetched
 * as a flat SVG from the Simple Icons CDN instead (recolored to the brand cyan).
 */
const SIMPLE_ICON_SLUG: Partial<Record<IconName, string>> = {
  spring: 'spring',
  springboot: 'springboot',
  kafka: 'apachekafka',
  openshift: 'redhatopenshift',
  thymeleaf: 'thymeleaf',
  javascript: 'javascript',
  typescript: 'typescript',
  postgresql: 'postgresql',
  mysql: 'mysql',
  podman: 'podman',
  tomcat: 'apachetomcat',
  gitlab: 'gitlab',
  bitbucket: 'bitbucket',
  jira: 'jira',
  confluence: 'confluence',
};

/** Simple Icons bakes color into the SVG server-side, so it needs an explicit hex per theme color. */
const SIMPLE_ICON_COLOR: Record<'cyan' | 'white', string> = {
  cyan: '58CBFB', // must match the --cyan token in styles.css
  white: 'FFFFFF',
};

/** Maps a stack/skill label to its icon. Compound "A / B" labels pick one representative icon. */
const TECH_ICON: Record<string, IconName> = {
  'Spring Boot': 'springboot',
  'Spring Batch': 'spring',
  'Spring Security': 'security',
  'Java (Spring)': 'java',
  Java: 'java',
  Kafka: 'kafka',
  OpenShift: 'openshift',
  Openshift: 'openshift',
  'Docker / OpenShift': 'docker',
  'Docker / Podman': 'docker',
  Docker: 'docker',
  Podman: 'podman',
  Angular: 'angular',
  Typescript: 'typescript',
  Javascript: 'javascript',
  Thymeleaf: 'thymeleaf',
  Microservices: 'nodes',
  'Webservices (REST/SOAP)': 'api',
  'Webservices (SOAP/REST)': 'api',
  Webservices: 'globe',
  Websphere: 'server',
  JBoss: 'server',
  Tomcat: 'tomcat',
  LDAP: 'ldap',
  'IBM MQ': 'mq',
  'DB2 / MSSQL': 'database',
  'IBM DB2': 'database',
  DB2: 'database',
  MSSQL: 'database',
  'Postgre SQL': 'postgresql',
  MySQL: 'mysql',
  'Java EE': 'java',
  'Clean Code Principles': 'sparkle',
  'Clean Code': 'sparkle',
  'Agile (Scrum)': 'cycle',
  Agile: 'cycle',
  'Gitlab/Bitbucket': 'gitlab',
  Jira: 'jira',
  Confluence: 'confluence',
};

export function techIcon(label: string): IconName {
  return TECH_ICON[label] ?? 'tech';
}

@Component({
  selector: 'app-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  readonly name = input<IconName>('tech');
  readonly size = input(16);
  readonly color = input<'cyan' | 'white'>('cyan');

  get simpleIconSlug(): string | undefined {
    return SIMPLE_ICON_SLUG[this.name()];
  }

  get simpleIconUrl(): string {
    return `https://cdn.simpleicons.org/${this.simpleIconSlug}/${SIMPLE_ICON_COLOR[this.color()]}`;
  }

  get faClass(): string {
    return FA_ICON_CLASS[this.name()] ?? FA_ICON_CLASS['tech']!;
  }
}
