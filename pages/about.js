import styles from './About.module.css';
import { FaCode, FaLaptopCode, FaServer, FaMobileAlt, FaTools, FaGraduationCap, FaBrain } from 'react-icons/fa';

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.heading}>À propos de moi</h1>

        <p className={styles.paragraph}>
          <FaGraduationCap className={styles.icon} />
          Je m&#39appelle <span className={styles.highlight}>Souhir Manai</span>, ingénieure en développement logiciel passionnée par la création de solutions numériques innovantes et performantes.
        </p>

        <p className={styles.paragraph}>
          <FaCode className={styles.icon} />
          Spécialisée dans le développement <span className={styles.highlight}>frontend</span>, <span className={styles.highlight}>backend</span> et <span className={styles.highlight}>mobile</span>, je conçois des applications web et mobiles robustes en m&#39appuyant sur des technologies modernes comme <span className={styles.highlight}>React.js</span>, <span className={styles.highlight}>Node.js</span>, <span className={styles.highlight}>Flutter</span> et <span className={styles.highlight}>Next.js</span>.
        </p>

        <p className={styles.paragraph}>
          <FaTools className={styles.icon} />
          Mon approche est centrée sur l&#39<span className={styles.highlight}>efficacité</span>, &#39<span className={styles.highlight}>expérience utilisateur</span> et l&#39<span className={styles.highlight}>intégration continue</span>. En travaillant dans des environnements <span className={styles.highlight}>Agile</span>, j&#39ai su collaborer efficacement avec des équipes pluridisciplinaires pour mener à bien des projets complexes.
        </p>

        <p className={styles.paragraph}>
          <FaBrain className={styles.icon} />
          En parallèle, je m&#39intéresse aux domaines de l&#39<span className={styles.highlight}>intelligence artificielle</span> et de la <span className={styles.highlight}>data analysis</span>, que je continue d&#39explorer à travers des projets personnels.
        </p>

        <p className={styles.paragraph}>
          <FaGraduationCap className={styles.icon} />
          Je suis diplômée de l&#39École Nationale des Sciences et des Technologies Avancées et je m&#39efforce continuellement d&#39élargir mes compétences techniques et humaines.
        </p>

        <p className={styles.paragraph}>
          <FaLaptopCode className={styles.icon} />
          <span className={styles.highlight}>Compétences clés :</span> React.js, Node.js, Django, Flutter, Next.js, TypeScript, CI/CD (Docker, Jenkins), PostgreSQL, MongoDB, REST APIs, OpenAI API, Web Scraping, etc.
        </p>
      </div>
    </div>
  );
}
