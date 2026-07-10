import { Locale } from '../core/i18n/translations';
import { IconName } from '../components/icon/icon.component';

export interface Project {
  title: string;
  date: string;
  description: string;
  stack: string[];
}

export interface Profile {
  name: string;
  brand: string;
  tagline: string;
  role: string;
  email: string;
  linkedin: string;
  heroSummary: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  icon: IconName;
  title: string;
  description: string;
  wide?: boolean;
}

export interface Publication {
  tag: string;
  title: string;
  description: string;
  linkText: string;
  accent?: boolean;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface ResumeData {
  profile: Profile;
  stats: Stat[];
  services: Service[];
  publications: Publication[];
  projects: Project[];
  skillGroups: SkillGroup[];
  certificates: Certificate[];
}

/** Tech/stack labels double as lookup keys for techIcon() in icon.component.ts, so they stay in English across locales. */
const SKILLS_CORE: string[] = ['Java', 'Spring Boot', 'Microservices', 'Spring Batch', 'Webservices (SOAP/REST)'];
const SKILLS_FRONTEND: string[] = ['Angular', 'Typescript' ,'Javascript'];
const SKILLS_MIDDLEWARE: string[] = ['Spring Security', 'LDAP','Kafka', 'IBM MQ'];
const SKILLS_DB: string[] = ['IBM DB2', 'MSSQL','Postgre SQL', 'MySQL'];
const SKILLS_INFRA: string[] = ['Openshift', 'Docker / Podman','Websphere', 'JBoss', 'Tomcat'];
const SKILLS_DEVTOOLS: string[] = ['Clean Code Principles', 'Agile (Scrum)','Gitlab/Bitbucket', 'Jira', 'Confluence'];


const RESUME_EN: ResumeData = {
  profile: {
    name: 'Bódis Tamás',
    brand: 'BTImpl',
    tagline: 'Where Quality Meets Innovation',
    role: 'Founder & Full-Stack Developer',
    email: 'tamas.bodis@btimpl.eu',
    linkedin: 'https://www.linkedin.com/in/tamasbodisbtimpl',
    heroSummary:
      "I'm a full-stack developer driven by a broad interest in the IT world. " +
      "I stay adaptable to new technologies, always keeping a core focus on writing " +
      "clean, maintainable, and understandable code. Plain words over buzzwords; " +
      "quality speaks for itself.",
  },
  stats: [
    { value: '10+ Years', label: 'Enterprise & banking development experience' },
    { value: 'Professional', label: 'Fast and cost effective development' },
    { value: 'Clean Code', label: 'Simple and maintainable code' },
  ],
  services: [
    {
      icon: 'tech',
      title: 'Full-Stack & Backend Systems Development',
      description:
        'Building scalable, robust, and maintainable applications. Leveraging Spring Boot and modern frontend frameworks, I deliver end-to-end solutions engineered for high performance. Every line of code adheres to SOLID principles, ensuring your software is not just functional today, but easy to extend and evolve tomorrow.',
      wide: true,
    },
    {
      icon: 'cycle',
      title: 'Legacy System Modernization',
      description:
        'Safely migrating monolithic structures into modern microservices-based ' +
        'architectures, with seamless API and ESB integrations.',
    },
    {
      icon: 'docker',
      title: 'Containerization & Dev-Environment Optimization',
      description:
        'Transition local infrastructure (databases, application servers, and message queues) into isolated containers. This eliminates tedious local setup, guarantees environment parity across the team, and significantly accelerates developer onboarding and velocity.',
    },
    {
      icon: 'mentor',
      title: 'Technology Consulting & Engineering Mentoring',
      description:
        'Elevating your architecture and your team simultaneously. I provide technical leadership to align your software choices with business goals, alongside hands-on mentoring for engineering teams. Through targeted code reviews, architectural workshops, and clean code practices, I help foster a culture of technical excellence and sustainable development.',
      wide: true,
    },
  ],
  publications: [
    // {
    //   tag: 'CASE STUDY',
    //   title: 'Banking Portal Renewal & Microservices Migration',
    //   description:
    //     'Redesigning an outdated banking frontend and monolithic backend into a modern ' +
    //     'microservices-based infrastructure — improving customer experience and internal ' +
    //     'development velocity.',
    //   linkText: 'View case study',
    //   accent: true,
    // },
    // {
    //   tag: 'INSIGHT',
    //   title: 'Why "Plain Words" Is the Best Architectural Decision',
    //   description:
    //     'Clear communication and understandable code beat buzzwords every time. How a ' +
    //     'maintainable codebase reduces software development costs over the long run.',
    //   linkText: 'Read article',
    // },
  ],
  projects: [
    {
      title: 'Renewal Project',
      date: '2024 — Present',
      description:
        "I was a member of a scrum team which was dedicated to renewing the bank's user " +
        'identification process in the branches. We rewrote the legacy Struts and Java EE ' +
        'based as-is solution into a Spring Boot based system with an Angular UI. Our ' +
        'solution uses a microservice architecture which has been implemented on the ' +
        'OpenShift platform.',
      stack: ['Spring Boot', 'Microservices', 'Kafka', 'OpenShift', 'Angular', 'Webservices (REST/SOAP)', 'Spring Batch'],
    },
    {
      title: 'Release Management Application',
      date: '2018 — 2024',
      description:
        'We had a manual process to create a go-live plan based on Jira tickets and Nexus ' +
        'data. I wrote a new application in Spring Boot with a Thymeleaf frontend, ' +
        'integrated with Jira, Confluence, Nexus and a local FTP. With this app we reduced ' +
        'the go-live plan creation time from days to hours.',
      stack: ['Spring Boot', 'OpenShift', 'Thymeleaf'],
    },
    {
      title: 'Various Integration Projects',
      date: '2017 — Present',
      description:
        'As a Java developer I supported the different integrations to the mother ' +
        "company's system. I had to write adapters between the local and the remote " +
        'systems, and wrote mapping and business logic.',
      stack: ['Java EE', 'DB2', 'MSSQL', 'Agile', 'Docker', 'Clean Code', 'Websphere', 'JBoss'],
    },
  ],
  skillGroups: [
    { title: 'Core Backend & Architecture', skills: SKILLS_CORE },
    { title: 'Frontend', skills: SKILLS_FRONTEND },
    { title: 'Middleware', skills: SKILLS_MIDDLEWARE },
    { title: 'Databases', skills: SKILLS_DB },
    { title: 'Infrastructure', skills: SKILLS_INFRA },
    { title: 'Methodologies & Development Tools', skills: SKILLS_DEVTOOLS },
  ],
  certificates: [
    { title: 'Bachelor of Computer Program Designer', issuer: 'University of Pannonia', date: '2009 — 2013' },
    { title: 'Oracle Certified Associate, Java SE 8 Programmer', issuer: 'Oracle', date: '2016' },
  ],
};

const RESUME_HU: ResumeData = {
  profile: {
    name: 'Bódis Tamás',
    brand: 'BTImpl',
    tagline: 'Where Quality Meets Innovation',
    role: 'Alapító & Full-Stack fejlesztő',
    email: 'tamas.bodis@btimpl.eu',
    linkedin: 'https://www.linkedin.com/in/tamasbodisbtimpl',
    heroSummary:
      'Full-stack fejlesztő vagyok, akit az IT világa iránti széles körű érdeklődés hajt. ' +
      'Nyitott vagyok az új technológiákra, miközben mindig a tiszta, karbantartható és ' +
      'érthető kód írására helyezem a hangsúlyt. Egyszerű szavak a szakzsargon helyett — ' +
      'a minőség önmagáért beszél.',
  },
  stats: [
    { value: '10+ év', label: 'Vállalati és banki fejlesztési tapasztalat' },
    { value: 'Professzionális', label: 'Gyors és költséghatékony fejlesztés' },
    { value: 'Tiszta kód', label: 'Egyszerű és karbantartható kód' },
  ],
  services: [
    {
      icon: 'tech',
      title: 'Full-Stack és Backend Rendszerfejlesztés',
      description:
        'Skálázható, robusztus és karbantartható alkalmazások fejlesztése. A Spring Boot és a modern frontend keretrendszerek adta lehetőségeket kihasználva olyan végponttól végpontig terjedő (end-to-end) megoldásokat szállítok, amelyeket magas teljesítményre terveztek. Minden egyes sor kód megfelel a SOLID elveknek, biztosítva, hogy az Ön szoftvere ne csak ma működjön megfelelően, hanem holnap is könnyen bővíthető és fejleszthető legyen.',
      wide: true,
    },
    {
      icon: 'cycle',
      title: 'Legacy rendszerek modernizálása',
      description:
        'Monolitikus struktúrák biztonságos átalakítása modern, mikroszolgáltatás-alapú ' +
        'architektúrákká, zökkenőmentes API- és ESB-integrációkkal.',
    },
    {
      icon: 'docker',
      title: 'Containerization & Dev-Environment Optimiliálás',
      description:
        'Helyi infrastruktúra (adatbázisok, alkalmazásszerverek és üzenetsorok) átültetése izolált konténerekbe. Ez kiküszöböli a nehézkes helyi konfigurációt, garantálja a környezeti azonosságot a csapaton belül, valamint jelentősen felgyorsítja az új fejlesztők betanulását és a fejlesztési sebességet.',
    },
    {
      icon: 'mentor',
      title: 'Technológiai tanácsadás és mentorálás',
      description:
        'Architektúrájának és csapatának szintlépése – egyszerre. Technikai vezetést biztosítok, hogy a szoftveres döntései összhangban legyenek az üzleti célokkal, emellett gyakorlati mentorálást nyújtok a mérnökcsapatok számára. Célzott kód-felülvizsgálatokkal, architekturális workshopokkal és a tiszta kód (clean code) gyakorlatok átadásával segítek kialakítani a technikai kiválóság és a fenntartható fejlesztés kultúráját.',
      wide: true,
    },
  ],
  publications: [
    // {
    //   tag: 'ESETTANULMÁNY',
    //   title: 'Banki portál megújítása és mikroszolgáltatás-migráció',
    //   description:
    //     'Egy elavult banki frontend és monolitikus backend újratervezése modern, ' +
    //     'mikroszolgáltatás-alapú infrastruktúrává — javítva az ügyfélélményt és a belső ' +
    //     'fejlesztési sebességet.',
    //   linkText: 'Esettanulmány megtekintése',
    //   accent: true,
    // },
    // {
    //   tag: 'ÉSZREVÉTEL',
    //   title: 'Miért az „egyszerű szavak” a legjobb architektúrális döntés',
    //   description:
    //     'A világos kommunikáció és az érthető kód mindig felülmúlja a szakzsargont. Hogyan ' +
    //     'csökkenti egy karbantartható kódbázis a szoftverfejlesztés hosszú távú költségeit.',
    //   linkText: 'Cikk elolvasása',
    // },
  ],
  projects: [
    {
      title: 'Megújítási projekt',
      date: '2024 — jelenleg',
      description:
        'Egy scrum csapat tagjaként veszek részt egy bank fiókhálózati ügyfél-azonosításának ' +
        'megújításában. A legacy Struts és Java EE alapú megoldást egy Spring ' +
        'Boot alapú rendszerré alakítottuk át, Angular felhasználói felülettel. A megoldás ' +
        'mikroszolgáltatás-architektúrát használ, amelyet az OpenShift platformon valósítottunk meg.',
      stack: ['Spring Boot', 'Microservices', 'Kafka', 'OpenShift', 'Angular', 'Webservices (REST/SOAP)', 'Spring Batch'],
    },
    {
      title: 'Release Management alkalmazás',
      date: '2018 — 2024',
      description:
        'Korábban egy manuális folyamat volt a go-live terv elkészítésére Jira jegyek és ' +
        'Nexus adatok alapján. Írtam egy új alkalmazást Spring Boot-tal és Thymeleaf ' +
        'frontenddel, amelyet integráltunk a Jira-val, Confluence-szel, Nexus-szal és egy ' +
        'helyi FTP-vel. Ezzel az alkalmazással órákra csökkentettük a go-live terv ' +
        'elkészítésének idejét, ami korábban napokig tartott.',
      stack: ['Spring Boot', 'OpenShift', 'Thymeleaf'],
    },
    {
      title: 'Különböző integrációs projektek',
      date: '2017 — jelenleg',
      description:
        'Java fejlesztőként támogatom a megrendelő anyavállalati rendszereihez kapcsolódó különböző ' +
        'integrációkat. Adaptereket írtok a helyi és a távoli rendszerek között, valamint ' +
        'mapping- és üzleti logikát fejlesztetek.',
      stack: ['Java EE', 'DB2', 'MSSQL', 'Agile', 'Docker', 'Clean Code', 'Websphere', 'JBoss'],
    },
  ],
  skillGroups: [
    { title: 'Core Backend és Architektúra', skills: SKILLS_CORE },
    { title: 'Frontend', skills: SKILLS_FRONTEND },
    { title: 'Middleware', skills: SKILLS_MIDDLEWARE },
    { title: 'Adatbázisok', skills: SKILLS_DB },
    { title: 'Infrastruktura', skills: SKILLS_INFRA },
    { title: 'Módszertan & Fejlesztői Eszközök', skills: SKILLS_DEVTOOLS },
  ],
  certificates: [
    { title: 'Programtervező informatikus BSc', issuer: 'Pannon Egyetem', date: '2009 — 2013' },
    { title: 'Oracle Certified Associate, Java SE 8 Programmer', issuer: 'Oracle', date: '2016' },
  ],
};

export const RESUME_DATA: Record<Locale, ResumeData> = {
  en: RESUME_EN,
  hu: RESUME_HU,
};
