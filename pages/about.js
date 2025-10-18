"use client";

import React, { useState, useEffect } from 'react';
import styles from './About.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCode, 
  FaLaptopCode, 
  FaServer, 
  FaMobileAlt, 
  FaTools, 
  FaGraduationCap, 
  FaBrain,
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
  FaCloud
} from 'react-icons/fa';
import Image from 'next/image';
const skillCategories = [
  {
    title: "Frontend",
    icon: <FaCode />,
    skills: ["React.js", "Next.js", "Angular", "TypeScript", "Tailwind CSS"],
    color: "#e94560"
  },
  {
    title: "Backend",
    icon: <FaServer />,
    skills: ["Node.js", "Python/Django", "Spring Boot", "PHP", "REST APIs"],
    color: "#ff6b9d"
  },
  {
    title: "Mobile",
    icon: <FaMobileAlt />,
    skills: ["Flutter", "React Native", "Firebase", "iOS/Android"],
    color: "#4cc9f0"
  },
  {
    title: "IA & Data",
    icon: <FaBrain />,
    skills: ["TensorFlow.js", "OpenAI API", "NLP", "Web Scraping", "Data Analysis"],
    color: "#7209b7"
  },
  {
    title: "DevOps",
    icon: <FaCloud />,
    skills: ["Docker", "Kubernetes", "Jenkins", "CI/CD", "Git/GitHub"],
    color: "#f72585"
  },
  {
    title: "Bases de Données",
    icon: <FaShieldAlt />,
    skills: ["PostgreSQL", "MongoDB", "Oracle", "MySQL", "SQLite"],
    color: "#3a86ff"
  }
];

const experienceTimeline = [
  {
    year: "2025 - Présent",
    title: "Fondatrice & Ingénieure Développement",
    company: "Inova Sphere",
    description: "Création et gestion d'une startup spécialisée en solutions digitales. Conception d'applications web, mobiles et SaaS."
  },
  {
    year: "2024 - 2025",
    title: "Ingénieure en développement logiciel",
    company: "Scienta Solution",
    description: "Développement d'ERP, sites web et applications mobiles. Optimisation des performances systèmes de 15-20%."
  },
  {
    year: "2023 - 2024",
    title: "Ingénieure en développement logiciel",
    company: "SpearConsulting",
    description: "Développement d'applications web complètes avec amélioration de l'expérience utilisateur de 25%."
  },
  {
    year: "2023",
    title: "Stagiaire développeur web et mobile",
    company: "SuperVerse",
    description: "Réalisation d'un projet complet augmentant l'engagement utilisateur de 40%."
  },
  {
    year: "2020 - 2023",
    title: "Cycle d'ingénieur",
    company: "ENSTA Tunis",
    description: "Diplôme d'ingénieur en technologies avancées et développement logiciel."
  }
];

export default function About() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [animatedStats, setAnimatedStats] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate background particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 10
    }));
    setParticles(newParticles);

    // Trigger stats animation when component mounts
    setTimeout(() => setAnimatedStats(true), 500);
  }, []);

  const stats = [
    { value: 3, label: "Années d'expérience", suffix: "+" },
    { value: 20, label: "Projets réalisés", suffix: "+" },
    { value: 15, label: "Performance améliorée", suffix: "%" },
    { value: 40, label: "Engagement utilisateur", suffix: "%" }
  ];

  return (
    <div className={styles.about}>
      {/* Animated Background Particles */}
      <div className={styles.particlesContainer}>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={styles.particle}
            initial={{ 
              opacity: 0,
              x: particle.x + "%",
              y: particle.y + "%"
            }}
            animate={{ 
              opacity: [0, 0.6, 0],
              y: [particle.y + "%", (particle.y - 40) + "%", particle.y + "%"]
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              width: particle.size,
              height: particle.size,
            }}
          />
        ))}
      </div>

      <div className={styles.container}>
        {/* Main Heading */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heading}>
            <span className={styles.gradientText}>Ingénieure Innovante</span>
            <br />
            <span className={styles.subHeading}>{`Développement Full-Stack & IA`}</span>
          </h1>
          <div className={styles.headerDecoration}>
            <div className={styles.decorationCircle}></div>
            <div className={styles.decorationCircle}></div>
            <div className={styles.decorationCircle}></div>
          </div>
        </motion.div>

        {/* Introduction Section */}
        <motion.section 
          className={styles.introSection}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.introContent}>
            <div className={styles.avatarContainer}>
              <div className={styles.avatarGlow}></div>
              <div className={styles.avatar}>
                <Image src="/souhir_pic.png" alt="Souhir Manai" />
              </div>
            </div>
            <div className={styles.introText}>
              <h2>Bonjour, je suis <span className={styles.nameHighlight}>Souhir Manai</span> 👋</h2>
              <p>
                  {` Fondatrice d'`}<span className={styles.highlight}>Inova Sphere</span>   {` et ingénieure en développement full-stack passionnée par l'innovation technologique. `}
               {` Je crée des solutions digitales robustes qui allient performance technique et excellence utilisateur.`}
              </p>
              <div className={styles.quickStats}>
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className={styles.quickStat}
                    initial={{ scale: 0 }}
                    animate={{ scale: animatedStats ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className={styles.statValue}>
                      {stat.value}
                      <span className={styles.statSuffix}>{stat.suffix}</span>
                    </span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills Grid */}
        <motion.section
          className={styles.skillsSection}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className={styles.sectionTitle}>
            <FaLaptopCode className={styles.titleIcon} />
            {`Domaines d'Expertise`}
          </h2>
          
          <div className={styles.skillsGrid}>
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className={`${styles.skillCategory} ${activeCategory === index ? styles.active : ''}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={() => setActiveCategory(index)}
                style={{ '--category-color': category.color }}
              >
                <div className={styles.categoryHeader}>
                  <span className={styles.categoryIcon}>{category.icon}</span>
                  <h3>{category.title}</h3>
                </div>
                <div className={styles.skillsList}>
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skill} className={styles.skillItem}>{skill}</span>
                  ))}
                </div>
                <div className={styles.categoryGlow}></div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Timeline */}
        <motion.section
          className={styles.experienceSection}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>
            <FaRocket className={styles.titleIcon} />
            Parcours Professionnel
          </h2>
          
          <div className={styles.timeline}>
            {experienceTimeline.map((item, index) => (
              <motion.div
                key={index}
                className={styles.timelineItem}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <span className={styles.timelineYear}>{item.year}</span>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <span className={styles.timelineCompany}>{item.company}</span>
                  <p className={styles.timelineDescription}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Philosophy Section */}
        <motion.section
          className={styles.philosophySection}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>
            <FaLightbulb className={styles.titleIcon} />
            Philosophie de Travail
          </h2>
          
          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyCard}>
              <FaUsers className={styles.philosophyIcon} />
              <h3>Collaboration Agile</h3>
              <p>{`Je privilégie le travail d'équipe et les méthodologies Agile pour une gestion de projet efficace et adaptative.`}</p>
            </div>
            
            <div className={styles.philosophyCard}>
              <FaChartLine className={styles.philosophyIcon} />
              <h3>Innovation Continue</h3>
              <p>{`Je reste constamment à l'affût des nouvelles technologies et tendances pour proposer des solutions modernes.`}</p>
            </div>
            
            <div className={styles.philosophyCard}>
              <FaShieldAlt className={styles.philosophyIcon} />
              <h3>Qualité & Performance</h3>
              <p>{`Je m'engage à fournir un code de qualité, optimisé et maintenable, respectant les meilleures pratiques.`}</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}