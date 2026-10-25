"use client";

import React, { useState, useEffect } from 'react';
import styles from './About.module.css';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaMobileAlt,
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
    skills: [
      "React.js",
      "Next.js",
      "Angular",
      "TypeScript",
      "Tailwind CSS"
    ],
    color: "#e94560"
  },
  {
    title: "Backend",
    icon: <FaServer />,
    skills: [
      "Node.js",
      "Python/Django",
      "Spring Boot",
      "PHP",
      "REST APIs"
    ],
    color: "#ff6b9d"
  },
  {
    title: "Mobile",
    icon: <FaMobileAlt />,
    skills: [
      "Flutter",
      "React Native",
      "Firebase",
      "iOS/Android"
    ],
    color: "#4cc9f0"
  },
  {
    title: "IA & Data",
    icon: <FaBrain />,
    skills: [
      "OpenAI API",
      "ChatGPT",
      "Claude Code",
      "Claude Desktop",
      "GitHub Copilot",
      "TensorFlow.js",
      "NLP",
      "Web Scraping"
    ],
    color: "#7209b7"
  },
  {
    title: "DevOps",
    icon: <FaCloud />,
    skills: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "CI/CD",
      "Git/GitHub"
    ],
    color: "#f72585"
  },
  {
    title: "Bases de Données",
    icon: <FaShieldAlt />,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Oracle",
      "MySQL",
      "SQLite"
    ],
    color: "#3a86ff"
  }
];

const experienceTimeline = [
  {
    year: "2026 - 2027",
    title: "Professeur Universitaire Vacataire",
    company: "ENSTAB",
    description:
      "Enseignement de l'algorithmique, de la programmation et de Python pour Data Science auprès des élèves ingénieurs."
  },
  {
    year: "Juin 2026 - Présent",
    title: "Instructeur",
    company: "Declitech",
    description:
      "Enseignement de Python et JavaScript, formation au coding, à l'IA générative et à la conception robotique."
  },
  {
    year: "Mars 2025 - Avril 2026",
    title: "Ingénieure en développement logiciel",
    company: "Spear Consulting",
    description:
      "Développement et maintenance d'applications web full-stack, analyse des besoins, tests, débogage et amélioration continue des solutions."
  },
  {
    year: "Mai 2024 - Février 2025",
    title: "Ingénieure en développement logiciel",
    company: "Scienta Solution",
    description:
      "Développement d'ERP, de sites web et d'applications mobiles avec React.js, Node.js, Flutter, React Native, PHP et Next.js."
  },
  {
    year: "Août 2023 - Mai 2024",
    title: "Ingénieure en développement logiciel",
    company: "Spear Consulting",
    description:
      "Développement d'applications web full-stack avec Django, Angular et Spring Boot, avec optimisation des performances et de l'expérience utilisateur."
  },
  {
    year: "Février 2023 - Juin 2023",
    title: "Stagiaire développeuse web & mobile",
    company: "SuperVerse",
    description:
      "Conception d'un site web et d'une application mobile avec React.js, React Native, TypeScript, Prisma et PostgreSQL."
  },
  {
    year: "Juin 2022 - Août 2022",
    title: "Stagiaire développeuse web",
    company: "Spear Consulting",
    description:
      "Développement d'un CRM pour centre d'appels avec Django et JavaScript, incluant des fonctionnalités de reporting."
  },
  {
    year: "Juillet 2021 - Août 2021",
    title: "Stagiaire développeuse web",
    company: "La Poste Tunisienne",
    description:
      "Analyse des besoins et développement d'une plateforme PHP de recherche de stages en ligne."
  },
  {
    year: "2020 - 2023",
    title: "Cycle d'ingénieur",
    company: "ENSTA Tunis",
    description:
      "Diplôme d'ingénieure de l'École Nationale des Sciences et des Technologies Avancées."
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
    {
      value: 3,
      label: "Années d'expérience",
      suffix: "+"
    },
    {
      value: 20,
      label: "Projets réalisés",
      suffix: "+"
    },
    {
      value: 15,
      label: "Performance améliorée",
      suffix: "%"
    },
    {
      value: 40,
      label: "Engagement utilisateur",
      suffix: "%"
    }
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
              y: [
                particle.y + "%",
                particle.y - 40 + "%",
                particle.y + "%"
              ]
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              width: particle.size,
              height: particle.size
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
            <span className={styles.gradientText}>
              Ingénieure en Développement Logiciel
            </span>
            <br />
            <span className={styles.subHeading}>
              Full-Stack • Web • Mobile • IA
            </span>
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
                <Image
                  src="/souhir_picture.png"
                  alt="Souhir Manai"
                  width={300}
                  height={300}
                />
              </div>
            </div>

            <div className={styles.introText}>
              <h2>
                Bonjour, je suis{" "}
                <span className={styles.nameHighlight}>
                  Souhir Manai
                </span>{" "}
                👋
              </h2>

              <p>
                <span className={styles.highlight}>
                  Ingénieure en développement logiciel et développeuse
                  Full-Stack
                </span>
                {` avec plus de 3 ans d'expérience dans la conception et le développement d'applications web et mobiles. `}
                {`Je développe des solutions digitales robustes, modernes et adaptées aux besoins métier.`}
                <br />
                <br />
                {`Mon expérience couvre notamment les applications `}
                <span className={styles.highlight}>
                  Web, Mobile, ERP, CRM, SaaS et e-commerce
                </span>
                {`, avec des technologies telles que React.js, Next.js, Node.js, Python, Django, Flutter et React Native.`}
                <br />
                <br />
                {`J'intègre également des outils d'IA dans mon workflow de développement, notamment `}
                <span className={styles.highlight}>
                  ChatGPT, Claude Code, Claude Desktop, GitHub Copilot et
                  OpenAI API
                </span>
                {`, afin d'optimiser le développement, le débogage, la documentation et la résolution de problèmes.`}
              </p>

              <div className={styles.quickStats}>
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className={styles.quickStat}
                    initial={{ scale: 0 }}
                    animate={{
                      scale: animatedStats ? 1 : 0
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1
                    }}
                  >
                    <span className={styles.statValue}>
                      {stat.value}
                      <span className={styles.statSuffix}>
                        {stat.suffix}
                      </span>
                    </span>

                    <span className={styles.statLabel}>
                      {stat.label}
                    </span>
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
                className={`${styles.skillCategory} ${
                  activeCategory === index ? styles.active : ""
                }`}
                initial={{
                  opacity: 0,
                  scale: 0.8
                }}
                animate={{
                  opacity: 1,
                  scale: 1
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
                whileHover={{
                  scale: 1.05,
                  y: -5
                }}
                onClick={() => setActiveCategory(index)}
                style={{
                  "--category-color": category.color
                }}
              >
                <div className={styles.categoryHeader}>
                  <span className={styles.categoryIcon}>
                    {category.icon}
                  </span>
                  <h3>{category.title}</h3>
                </div>

                <div className={styles.skillsList}>
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={styles.skillItem}
                    >
                      {skill}
                    </span>
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
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.8 + index * 0.1
                }}
              >
                <div className={styles.timelineDot}></div>

                <div className={styles.timelineContent}>
                  <span className={styles.timelineYear}>
                    {item.year}
                  </span>

                  <h3 className={styles.timelineTitle}>
                    {item.title}
                  </h3>

                  <span className={styles.timelineCompany}>
                    {item.company}
                  </span>

                  <p className={styles.timelineDescription}>
                    {item.description}
                  </p>
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
              <p>
                {`Je privilégie le travail d'équipe et les méthodologies Agile pour une gestion de projet efficace et adaptative.`}
              </p>
            </div>

            <div className={styles.philosophyCard}>
              <FaChartLine className={styles.philosophyIcon} />
              <h3>Innovation & IA</h3>
              <p>
                {`J'intègre les nouvelles technologies et les outils d'intelligence artificielle dans mon workflow afin d'améliorer ma productivité et de développer des solutions modernes.`}
              </p>
            </div>

            <div className={styles.philosophyCard}>
              <FaShieldAlt className={styles.philosophyIcon} />
              <h3>Qualité & Performance</h3>
              <p>
                {`Je m'engage à fournir un code de qualité, optimisé et maintenable, respectant les meilleures pratiques de développement.`}
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}