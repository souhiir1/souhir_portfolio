// pages/experience.js
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <div className={styles.experience}>
      <h1 className={styles.title}>Expériences</h1>
      <div className={styles.timeline}>

        <div className={styles.job}>
          <h2 className={styles.jobTitle}>Ingénieur en développement logiciel</h2>
          <p className={styles.companyDate}>Scienta Solution | Soliman | Mai 2024  Présent</p>
          <ul className={styles.jobDescription}>
            <li>Conception et développement d'ERP, sites web et applications mobiles (React.js, Node.js, Flutter, React Native, PHP, Next.js).</li>
            <li>Gestion complète du cycle de vie des projets, avec respect des délais et des exigences.</li>
            <li>Optimisation des processus (+15 à 20% en performance système).</li>
            <li>Mise en place de solutions d'intégration réduisant les temps d'arrêt.</li>
          </ul>
        </div>

        <div className={styles.job}>
          <h2 className={styles.jobTitle}>Ingénieur en développement logiciel</h2>
          <p className={styles.companyDate}>SpearConsulting  Boumhal Ezzahra | Août 2023  Mai 2024</p>
          <ul className={styles.jobDescription}>
            <li>Développement complet d'applications web (Django, Angular, Spring Boot).</li>
            <li>Optimisation CI/CD avec GitHub, Jenkins, Docker (-30% temps déploiement).</li>
            <li>Réduction des temps d'arrêt grâce à une supervision efficace.</li>
          </ul>
        </div>

        <div className={styles.job}>
          <h2 className={styles.jobTitle}>Stagiaire développeur web et mobile</h2>
          <p className={styles.companyDate}>SuperVerse | Manar1 | Février 2023  Juin 2023</p>
          <ul className={styles.jobDescription}>
            <li>Projet complet : site web + application mobile (React.js, React Native) avec +40% d'engagement utilisateur.</li>
            <li>Architecture robuste avec TypeScript, Prisma, PostgreSQL et méthode Agile.</li>
            <li>CI/CD optimisé (GitHub, Jenkins, Docker).</li>
          </ul>
        </div>

        <div className={styles.job}>
          <h2 className={styles.jobTitle}>Stagiaire développeur web</h2>
          <p className={styles.companyDate}>Spear Consulting | Boumhal Ezzahra | Juin 2022  Août 2022</p>
          <ul className={styles.jobDescription}>
            <li>Conception d'un CRM pour call center (+20% de productivité).</li>
            <li>Développement avec HTML, CSS, JS, Django + reporting avancé.</li>
          </ul>
        </div>

        <div className={styles.job}>
          <h2 className={styles.jobTitle}>Stagiaire développeur web</h2>
          <p className={styles.companyDate}>La Poste Tunisienne | Tunis | Juillet 2021  Août 2021</p>
          <ul className={styles.jobDescription}>
            <li>Analyse des besoins + développement d'une appli PHP pour recherche de stages en ligne.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
