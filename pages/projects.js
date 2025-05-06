import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import Image from "next/image";
import { FaReact, FaDatabase, FaMobileAlt, FaShoppingCart, FaToolbox } from "react-icons/fa"; // Importing some icons

const projects = [
  {
    title: "Application e-commerce (SaaS + mobile)",
    description:
      "Plateforme SaaS + application mobile intégrant l’analyse de sentiments via OpenAI et TensorFlow.js pour les commentaires sur Facebook/Instagram.",
    technologies:
      "React.js, React Native, Node.js, PostgreSQL, Facebook/Instagram API, TensorFlow.js, OpenAI API",
    image: "/superverseApp.png",
    icon: <FaShoppingCart size={24} color="#64ffda" />, // Icon for e-commerce
  },
  {
    title: "Logiciel de caisse",
    description:
      "Système complet de vente, gestion client, fidélité, clôture et reporting.",
    technologies: "Django, React, PostgreSQL",
    image: "/pos_software.png",
    icon: <FaDatabase size={24} color="#64ffda" />, // Icon for database
  },
  {
    title: "CRM (web & mobile)",
    description:
      "Gestion des clients, partenaires, investisseurs avec une app mobile pour managers.",
    technologies: "React, React Native, Oracle, PHP, Node.js",
    image: "",
    icon: <FaReact size={24} color="#64ffda" />, // React icon for CRM
  },
  {
    title: "Site de recherche de stages",
    description:
      "Site web intuitif pour chercher et gérer des candidatures à des stages.",
    technologies: "HTML, CSS, JavaScript, PHP",
    image: "/internship_site.png",
    icon: <FaMobileAlt size={24} color="#64ffda" />, // Mobile icon for the site
  },
  {
    title: "Application – Vente de pneus",
    description:
      "Application mobile pour gérer commandes et stocks de pneus.",
    technologies: "React Native, PHP, MySQL",
    image: "/tire_store.png",
    icon: <FaMobileAlt size={24} color="#64ffda" />, // Mobile app icon
  },
  {
    title: "Application Adopt Me",
    description:
      "App style Instagram pour adoption d’animaux, avec chat, likes, posts et appels.",
    technologies: "Flutter, Firebase",
    image: "/adopt_me.png",
    icon: <FaMobileAlt size={24} color="#64ffda" />, // Mobile app icon
  },
  {
    title: "ChTextiles – vente de textile",
    description:
      "App mobile pour vente de textile, catalogue, commande, paiement sécurisé.",
    technologies: "Oracle, Node.js, React Native",
    image: "/chtextiles.png",
    icon: <FaReact size={24} color="#64ffda" />, // React icon for the app
  },
  {
    title: "Site e-commerce – Huile d'olive",
    description:
      "Site complet avec gestion de catalogue, commandes, paiement en ligne.",
    technologies: "Next.js, MongoDB, Stripe",
    image: "/olive_oil_store.png",
    icon: <FaShoppingCart size={24} color="#64ffda" />, // E-commerce site
  },
  {
    title: "CRM centre d'appel",
    description:
      "CRM sur mesure avec suivi des appels et statistiques.",
    technologies: "Django, PostgreSQL, React",
    image: "/crm_callcenter.png",
    icon: <FaToolbox size={24} color="#64ffda" />, // CRM tool icon
  },
];

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mes Projets</h1>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="rounded-t-xl object-cover"
              />
            </div>
            <div className={styles.textWrapper}>
              <h2 className={styles.projectTitle}>
                {project.icon} {project.title}
              </h2>
              <p className={styles.projectDescription}>{project.description}</p>
              <p className={styles.projectTechnologies}>{project.technologies}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
