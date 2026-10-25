import styles from './Experience.module.css';

export default function Experience() {
  return (
    <div className={styles.experience}>
      <h1 className={styles.title}>Expériences</h1>

      <div className={styles.timeline}>

        <div className={styles.job}>
          <h2 className={styles.jobTitle}>Professeur Universitaire Vacataire</h2>
          <p className={styles.companyDate}>
            {`ENSTAB | Année académique 2026 - 2027`}
          </p>
          <ul className={styles.jobDescription}>
            <li>{`Enseignement de l'algorithmique et de la programmation pour les élèves ingénieurs.`}</li>
            <li>{`Enseignement de la programmation Python pour Data Science pour les élèves ingénieurs.`}</li>
          </ul>
        </div>

        <div className={styles.job}>
          <h2 className={styles.jobTitle}>Instructeur</h2>
          <p className={styles.companyDate}>
            {`Declitech | Juin 2026 - Présent`}
          </p>
          <ul className={styles.jobDescription}>
            <li>{`Enseignement de la programmation Python et JavaScript.`}</li>
            <li>{`Formation des enfants au coding, à l'IA générative et à la conception robotique.`}</li>
            <li>{`Préparation et animation d'ateliers pratiques adaptés aux différents niveaux.`}</li>
          </ul>
        </div>

        <div className={styles.job}>
          <h2 className={styles.jobTitle}>Ingénieure en développement logiciel</h2>
          <p className={styles.companyDate}>
            {`Spear Consulting | Mars 2025 - Avril 2026`}
          </p>
          <ul className={styles.jobDescription}>
            <li>{`Développement et maintenance d'applications web full-stack adaptées aux besoins métier.`}</li>
            <li>{`Participation à l'analyse des besoins, au développement, aux tests, au débogage et à l'amélioration continue des solutions.`}</li>
            <li>{`Utilisation d'outils d'IA générative et d'assistance au code pour accélérer le développement, la documentation et la résolution de problèmes.`}</li>
          </ul>
        </div>

        <div className={styles.job}>
          <h2 className={styles.jobTitle}>Ingénieure en développement logiciel</h2>
          <p className={styles.companyDate}>
            {`Scienta Solution | Soliman | Mai 2024 - Février 2025`}
          </p>
          <ul className={styles.jobDescription}>
            <li>{`Conception et développement d'ERP, sites web et applications mobiles (React.js, Node.js, Flutter, React Native, PHP, Next.js).`}</li>
            <li>{`Gestion complète du cycle de vie des projets, avec respect des délais et des exigences.`}</li>
            <li>{`Optimisation des processus et des performances système.`}</li>
            <li>{`Mise en place de solutions d'intégration réduisant les temps d'arrêt.`}</li>
          </ul>
        </div>

        <div className={styles.job}>
          <h2 className={styles.jobTitle}>Ingénieure en développement logiciel</h2>
          <p className={styles.companyDate}>
            {`Spear Consulting | Boumhal Ezzahra | Août 2023 - Mai 2024`}
          </p>
          <ul className={styles.jobDescription}>
            <li>{`Développement complet d'applications web avec Django, Angular et Spring Boot.`}</li>
            <li>{`Optimisation CI/CD avec GitHub, Jenkins et Docker.`}</li>
            <li>{`Amélioration de l'expérience utilisateur via l'optimisation UI/UX et des performances.`}</li>
          </ul>
        </div>

        <div className={styles.job}>
          <h2 className={styles.jobTitle}>Stagiaire développeuse web et mobile</h2>
          <p className={styles.companyDate}>
            {`SuperVerse | Manar 1 | Février 2023 - Juin 2023`}
          </p>
          <ul className={styles.jobDescription}>
            <li>{`Conception d'un site web et d'une application mobile avec React.js et React Native.`}</li>
            <li>{`Implémentation d'une architecture robuste avec TypeScript, Prisma et PostgreSQL.`}</li>
            <li>{`Travail dans un environnement Agile.`}</li>
          </ul>
        </div>

        <div className={styles.job}>
          <h2 className={styles.jobTitle}>Stagiaire développeuse web</h2>
          <p className={styles.companyDate}>
            {`Spear Consulting | Boumhal Ezzahra | Juin 2022 - Août 2022`}
          </p>
          <ul className={styles.jobDescription}>
            <li>{`Conception et développement d'un CRM pour centre d'appels.`}</li>
            <li>{`Développement avec HTML, CSS, JavaScript et Django.`}</li>
            <li>{`Intégration de fonctionnalités de reporting avancées.`}</li>
          </ul>
        </div>

        <div className={styles.job}>
          <h2 className={styles.jobTitle}>Stagiaire développeuse web</h2>
          <p className={styles.companyDate}>
            {`La Poste Tunisienne | Tunis | Juillet 2021 - Août 2021`}
          </p>
          <ul className={styles.jobDescription}>
            <li>{`Analyse des besoins et développement d'une plateforme PHP de recherche de stages en ligne.`}</li>
          </ul>
        </div>

      </div>
    </div>
  );
}