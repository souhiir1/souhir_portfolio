"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Home.module.css";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const fullText = "Ingénieure en développement logiciel";

// Featured projects data
const featuredProjects = [
  {
    id: 1,
    title: "Inova Sphere - Site Corporate",
    description: "Site vitrine professionnel présentant les services de développement de solutions digitales.",
    image: "/inovasphere1.png",
    technologies: ["Next.js", "Node.js", "Tailwind CSS"],
    category: "web"
  },
  {
    id: 2,
    title: "Arcocerame - E-commerce",
    description: "Plateforme e-commerce spécialisée dans la vente d'articles en céramique.",
    image: "/arcocerame1.png",
    technologies: ["React.js", "Node.js", "MongoDB"],
    category: "ecommerce"
  },
  {
    id: 3,
    title: "PneuMafamech - App Mobile",
    description: "Application mobile de vente et gestion de stocks de pneus.",
    image: "/tire_store.png",
    technologies: ["React Native", "PHP", "MySQL"],
    category: "mobile"
  }
];

// AI Chatbot knowledge base
const aiKnowledgeBase = {
  "qui es tu": "Je suis Souhir Manai, ingénieure en développement logiciel et fondatrice d'Inova Sphere, spécialisée dans le développement full-stack et les solutions innovantes.",
  "expérience": "J'ai 5+ années d'expérience en développement, avec des postes chez Scienta Solution, SpearConsulting, et en tant que fondatrice d'Inova Sphere.",
  "compétences": "Mes compétences incluent React.js, Node.js, Python, Django, Flutter, React Native, IA, DevOps, et bien d'autres technologies modernes.",
  "projets": "J'ai réalisé 20+ projets incluant des applications web, mobiles, SaaS, ERP, et solutions e-commerce pour divers clients.",
  "contact": "Vous pouvez me contacter par email: souhirmanai9@gmail.com ou téléphone: +216 53 123 640",
  "inova sphere": "Inova Sphere est ma startup spécialisée dans le développement de solutions digitales innovantes pour les entreprises.",
  "formation": "Je suis diplômée de l'École Nationale des Sciences et des Technologies Avancées (ENSTA Tunis).",
  "technologies": "Je maîtrise React, Angular, Next.js, Node.js, Python, Django, Flutter, React Native, Docker, Kubernetes, et plus encore.",
  "disponibilité": "Je suis disponible pour de nouvelles opportunités et collaborations intéressantes.",
  "tarifs": "Pour discuter de tarifs et projets, contactez-moi directement pour une estimation personnalisée."
};

const Home = () => {
  const router = useRouter();
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [welcomeVisible, setWelcomeVisible] = useState(false);
  const [particles, setParticles] = useState([]);
  const [aiChatVisible, setAiChatVisible] = useState(false);
  const [aiMessages, setAiMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Generate floating particles for background
  useEffect(() => {
    const newParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 8
    }));
    setParticles(newParticles);
  }, []);

  // Typing effect
  useEffect(() => {
    const speed = deleting ? 60 : 120;
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayedText(fullText.slice(0, index + 1));
        setIndex(index + 1);
        if (index + 1 === fullText.length) {
          setTimeout(() => setDeleting(true), 2000);
        }
      } else {
        setDisplayedText(fullText.slice(0, index - 1));
        setIndex(index - 1);
        if (index === 0) {
          setDeleting(false);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [index, deleting]);

  // AI Chatbot functionality
  const handleAiAssistantClick = () => {
    setAiChatVisible(!aiChatVisible);
    if (!aiChatVisible && aiMessages.length === 0) {
      addAiMessage("Bonjour ! Je suis l'assistant IA de Souhir. Posez-moi des questions sur son expérience, compétences, ou projets !");
    }
  };

  const addAiMessage = (message, isUser = false) => {
    setAiMessages(prev => [...prev, { text: message, isUser, timestamp: new Date() }]);
  };

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    // Add user message
    addAiMessage(userInput, true);
    const userQuestion = userInput.toLowerCase();
    setUserInput("");
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      let response = "Veuillez contacter Souhir directement pour plus d'informations sur ce sujet.";
      
      // Find matching response
      Object.keys(aiKnowledgeBase).forEach(key => {
        if (userQuestion.includes(key)) {
          response = aiKnowledgeBase[key];
        }
      });

      // Special cases
      if (userQuestion.includes("bonjour") || userQuestion.includes("salut") || userQuestion.includes("hello")) {
        response = "Bonjour ! Je suis l'assistant IA de Souhir Manai. Comment puis-je vous aider ?";
      } else if (userQuestion.includes("merci")) {
        response = "Je vous en prie ! N'hésitez pas à me poser d'autres questions ou à contacter Souhir directement.";
      }

      addAiMessage(response);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickQuestion = (question) => {
    setUserInput(question);
    setTimeout(() => handleSendMessage(), 100);
  };

  const closeWelcomePopup = () => {
    setWelcomeVisible(false);
  };

  const quickQuestions = [
    "Quelle est votre expérience?",
    "Quelles sont vos compétences?",
    "Puis-je voir vos projets?",
    "Comment vous contacter?"
  ];

  return (
    <div className={styles.home}>
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
              opacity: [0, 0.8, 0],
              y: [particle.y + "%", (particle.y - 30) + "%", particle.y + "%"]
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

      {/* Enhanced Welcome Popup */}
      <AnimatePresence>
        {welcomeVisible && (
          <motion.div
            className={styles.welcomePopup}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <div className={styles.welcomeContent}>
              <button className={styles.closePopup} onClick={closeWelcomePopup}>
                ×
              </button>
              <div className={styles.welcomeIcon}>✨</div>
              <h2>Bienvenue chez Souhir Manai</h2>
              <p>Construisons ensemble quelque chose d'extraordinaire</p>
              
              <motion.button
                className={styles.contactButton}
                onClick={() => router.push("/contact")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Commençons un projet
              </motion.button>
              
              <button className={styles.skipButton} onClick={closeWelcomePopup}>
                Explorer le portfolio
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced AI Assistant Chat */}
      <AnimatePresence>
        {aiChatVisible && (
          <motion.div
            className={styles.aiChat}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.aiHeader}>
              <span className={styles.aiAvatar}>🤖</span>
              <span>Assistant IA de Souhir</span>
              <button 
                className={styles.closeButton}
                onClick={() => setAiChatVisible(false)}
              >
                ×
              </button>
            </div>
            
            <div className={styles.chatMessages}>
              {aiMessages.map((message, index) => (
                <div key={index} className={`${styles.message} ${message.isUser ? styles.userMessage : styles.aiMessage}`}>
                  {message.text}
                </div>
              ))}
              {isTyping && (
                <div className={styles.typingIndicator}>
                  <span>●</span>
                  <span>●</span>
                  <span>●</span>
                </div>
              )}
            </div>

            <div className={styles.quickQuestions}>
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  className={styles.quickQuestion}
                  onClick={() => handleQuickQuestion(question)}
                >
                  {question}
                </button>
              ))}
            </div>

            <div className={styles.chatInput}>
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Posez-moi une question..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button onClick={handleSendMessage}>➤</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Assistant Icon */}
      <motion.div 
        className={styles.aiAssistant}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: welcomeVisible ? 2 : 0, duration: 0.5 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        onClick={handleAiAssistantClick}
      >
        <span className={styles.aiIcon}>🤖</span>
        <span className={styles.aiTooltip}>Assistant IA - Parlez avec moi!</span>
      </motion.div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: welcomeVisible ? 0.8 : 0 }}
        >
          <div className={styles.titleContainer}>
            <h1 className={styles.heading}>
              {displayedText}
              <span className={styles.cursor}>|</span>
            </h1>
            <div className={styles.gradientOverlay}></div>
          </div>

          <p className={styles.subheading}>
            <span className={styles.highlight}>  {` Fondatrice d'Inova Sphere`}</span>  {`  et ingénieure en développement full-stack passionnée par l'innovation technologique.`}
            <br /><br />
            Spécialisée dans la création de solutions digitales robustes (ERP, SaaS, applications web/mobile) avec une expertise en <span className={styles.highlight}>React.js, Node.js, Python et IA</span>.
            <br /><br />
             {`J'ai dirigé des projets augmentant la performance système de 15-20% et l'engagement utilisateur de 40%, en appliquant les méthodologies}`}<span className={styles.highlight}>Agile</span> et les meilleures pratiques DevOps.
          </p>
          
          <motion.button
            className={styles.ctaButton}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400 }}
            onClick={() => router.push("/projects")}
          >
            <span>Explorer Mes Réalisations</span>
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            >
              🚀
            </motion.span>
          </motion.button>

          <motion.div 
            className={styles.stats}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className={styles.statItem}>
              <span className={styles.statNumber}>5+</span>
              <span className={styles.statLabel}>  {`Années d'expérience`}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>20+</span>
              <span className={styles.statLabel}>Projets réalisés</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>40%</span>
              <span className={styles.statLabel}>Engagement accru</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.heroImage}
          initial={{ opacity: 0, x: 60, rotate: 10 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1, delay: welcomeVisible ? 0.8 : 0 }}
        >
          <div className={styles.imageContainer}>
            <div className={styles.circleImage}>
              <Image
                src="/souhir.png"
                alt="Photo de Souhir Manai - Ingénieure en développement logiciel"
                width={350}
                height={350}
                className={styles.roundImage}
                priority
              />
            </div>
            
            <div className={styles.techOrbit}>
              <div className={styles.techIcon} style={{ '--i': 0 }}>⚛️</div>
              <div className={styles.techIcon} style={{ '--i': 1 }}>🐍</div>
              <div className={styles.techIcon} style={{ '--i': 2 }}>🤖</div>
              <div className={styles.techIcon} style={{ '--i': 3 }}>📱</div>
              <div className={styles.techIcon} style={{ '--i': 4 }}>⚡</div>
              <div className={styles.techIcon} style={{ '--i': 5 }}>🔗</div>
            </div>
            
            <div className={styles.imageGlow}></div>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className={styles.featuredProjects}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.projectsContainer}
        >
          <h2>Projets Récents</h2>
          <p>Découvrez quelques-unes de mes réalisations les plus significatives</p>
          
          <div className={styles.projectsGrid}>
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={styles.projectCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={styles.projectImage}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className={styles.projectImg}
                  />
                  <div className={styles.projectOverlay}>
                    <span>Voir le projet</span>
                  </div>
                </div>
                <div className={styles.projectContent}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className={styles.technologies}>
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.button
            className={styles.viewAllButton}
            onClick={() => router.push("/projects")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voir tous les projets
            <span>→</span>
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;