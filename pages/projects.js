"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Projects.module.css";
import Image from "next/image";
import { 
  FaReact, 
  FaDatabase, 
  FaMobileAlt, 
  FaShoppingCart, 
  FaToolbox,
  FaGlobe,
  FaStore,
  FaUsers,
  FaChild,
  FaGraduationCap,
  FaCheckCircle,
  FaCar,
  FaPaw,
  FaShirt,
  FaOilCan,
  FaPhone,
  FaPlus,
  FaExternalLinkAlt,
  FaGithub,
  FaPlayCircle,
  FaSpinner,
  FaCode,
  FaLayerGroup,
  FaRocket
} from "react-icons/fa";

const projects = [
    {
    id: 1,
    title: "SaaS de Facturation pour Freelances",
    description: "Solution SaaS complète de gestion de facturation et suivi de projets pour freelances.",
    fullDescription: "Plateforme cloud de gestion financière spécialisée pour les freelances avec génération de factures, suivi des paiements, reporting et intégrations bancaires.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "paymee", "Chart.js"],
    images: ["/saas1.png", "/saas2.png", "/saas3.png","saas4.png","saas5.png","saas6.png"],
    category: "saas",
    status: "completed",
    liveUrl: "https://invoicing-frontend-4h8w.onrender.com/",
    githubUrl: "https://github.com/souhiir1/invoicing-frontend",
    features: ["Facturation automatique", "Dashboard analytique", "Multi-devises", "Export PDF","paiement enligne"],
    year: 2025
  },
  {
    id: 2,
    title: "Inova Sphere - Site Corporate",
    description: "Site vitrine professionnel présentant les services de développement de solutions digitales avec dashboard administrateur.",
    fullDescription: "Plateforme corporate complète avec présentation des services, portfolio de réalisations et système de gestion de contenu. Interface moderne et responsive avec animations fluides et optimisation SEO.",
    technologies: ["Next.js", "Node.js", "SQLite", "Tailwind CSS", "TypeScript"],
    images: ["/inovasphere1.png", "/inovasphere2.png", "/inovasphere3.png","/inovasphere4.png","/inovasphere5.png"],
    category: "web",
    status: "completed",
    liveUrl: "https://inovasphere.tech",
    githubUrl: null,
    features: ["Design responsive", "Dashboard admin", "Optimisation SEO", "Animations modernes"],
    year: 2025
  },
  {
    id: 3,
    title: "Arcocerame - Site E-commerce",
    description: "Plateforme e-commerce spécialisée dans la vente d'articles en céramique avec gestion de catalogue avancée.",
    fullDescription: "Site e-commerce complet pour une entreprise spécialisée dans les articles de céramique. Gestion des produits, panier, paiement sécurisé, et système de commandes. Interface utilisateur intuitive avec galerie produits haute qualité.",
    technologies: ["React.js", "Node.js", "MongoDB", "Stripe", "Cloudinary"],
    images: ["/arcocerame1.png", "/arcocerame2.png", "/arcocerame3.png"],
    category: "ecommerce",
    status: "completed",
    liveUrl: "https://arcocerame.com",
    githubUrl: null,
    features: [ "Gestion stock", "Interface admin", "Gallery produits"],
    year: 2024
  },
  {
    id: 4,
    title: "PneuMafamech - Application Mobile",
    description: "Application mobile de vente et gestion de stocks de pneus avec système de commande en ligne.",
    fullDescription: "Application complète de gestion de vente de pneus avec catalogue produits, système de commandes, suivi de livraison et interface administrateur. Optimisée pour les utilisateurs professionnels.",
    technologies: ["React Native", "PHP", "MySQL", "Firebase", "Stripe"],
    images: ["/tire_store.png", "/pneumafamech2.png", "/pneumafamech3.png"],
    category: "mobile",
    status: "completed",
    liveUrl: "https://play.google.com/store/apps/details?id=com.cspd_fdm&hl=fr&pli=1",
    githubUrl: null,
    features: ["Catalogue produits", "Commandes en ligne", "Gestion stock", "Paiement mobile"],
    year: 2023/2024
  },
  {
   id: 5,
    title: "simple tasbeeh counter app",
    description: "Digital tasbeeh counter mobile app",
    fullDescription: "it's a simple mobile app that allows muslims to count their dhikrs and save them",
    technologies: ["react native"],
    images: ["app.png","app1.png","app2"],
    category: "app",
    status: "completed",
    liveUrl: null,
    githubUrl: "https://github.com/souhiir1/tasbeeh-app",
    features: ["mobile app","tasbeeh","muslims","react-native"],
    year: 2025
},
  {
    id: 6,
    title: "MIAW Network - Application Éducative",
    description: "Plateforme interactive permettant aux enfants de partager leurs pensées et créativité.",
    fullDescription: "Application mobile éducative innovante offrant un espace sécurisé pour les enfants afin d'exprimer leur créativité. Interface colorée et intuitive avec système de modération parentale et contenu adapté.",
    technologies: ["React Native", "Node.js", "PostgreSQL", "Firebase Auth", "AWS S3"],
    images: ["/miaw1.png", "/miaw2.png", "/miaw3.png"],
    category: "mobile",
    status: "in-progress",
    liveUrl: null,
    githubUrl: null,
    features: ["Interface enfant", "Modération parentale", "Contenu éducatif", "Cloud storage"],
    year: 2025
  },

  {
    id: 7,
    title: "Application E-commerce (SaaS + Mobile)",
    description: "Plateforme SaaS intégrant l'analyse de sentiments via OpenAI pour les commentaires sociaux.",
    fullDescription: "Solution e-commerce complète avec application mobile intégrée. Système d'analyse de sentiments en temps réel pour les commentaires Facebook/Instagram utilisant l'IA.",
    technologies: ["React.js", "React Native", "Node.js", "PostgreSQL", "OpenAI API", "TensorFlow.js"],
    images: ["/ecom-saas1.png", "/ecom-saas2.png", "/ecom-saas3.png","/ecom-saas4.png","/ecom-saas5.png"],
    category: "saas",
    status: "completed",
    liveUrl: null,
    githubUrl: null,
    features: ["Analyse sentiments IA", "Multi-platform", "API social media", "Dashboard temps réel"],
    year: 2023
  },
  {
    id: 8,
    title: "Logiciel de Caisse Intelligent",
    description: "Système complet de vente, gestion client, fidélité et reporting analytique.",
    fullDescription: "Logiciel de point de vente avancé avec gestion des stocks, clients, programmes de fidélité et reporting détaillé. Interface optimisée pour les commerces de détail.",
    technologies: ["Django", "React", "PostgreSQL", "WebSocket", "Chart.js"],
    images: ["/pos1.png", "/pos2.png", "/pos3.png"],
    category: "web",
    status: "completed",
    liveUrl: null,
    githubUrl: null,
    features: ["Gestion multi-caisses", "Reporting analytique", "Fidélité clients", "Sync en temps réel"],
    year: 2023
  },
  {
    id: 9,
    title: "CRM Entreprise (Web & Mobile)",
    description: "Solution complète de gestion des relations clients avec application mobile pour managers.",
    fullDescription: "CRM sur mesure avec gestion des leads, opportunités, calendrier et reporting. Application mobile dédiée pour les équipes commerciales en déplacement.",
    technologies: ["React", "React Native", "Oracle", "PHP", "Node.js"],
    images: ["/crm1.png", "/crm2.png", "/crm3.png"],
    category: "web",
    status: "completed",
    liveUrl: null,
    githubUrl: null,
    features: ["Gestion leads", "Calendrier intégré", "Mobile sync", "Analytics"],
    year: 2023
  },
  {
    id: 10,
    title: "Adopt Me - Réseau Social Animalier",
    description: "Application style Instagram dédiée à l'adoption d'animaux avec chat et fonctionnalités sociales.",
    fullDescription: "Réseau social communautaire pour l'adoption d'animaux. Fonctionnalités complètes : publication, messagerie, likes, et système de matching.",
    technologies: ["Flutter", "Firebase", "Cloud Storage", "Push Notifications"],
    images: ["/adoptme1.png", "/adoptme2.png", "/adoptme3.png"],
    category: "mobile",
    status: "completed",
    liveUrl: null,
    githubUrl: null,
    features: ["Chat en temps réel", "Galerie photos", "Système matching", "Notifications"],
    year: 2022
  },
  {
    id: 11,
    title: "ChTextiles - Application Mobile",
    description: "Application de vente de textile avec catalogue, commande et paiement sécurisé.",
    fullDescription: "Plateforme mobile de vente de produits textiles avec gestion des collections, tailles, couleurs et système de commande avancé.",
    technologies: ["React Native", "Oracle", "Node.js", "Payment Gateway"],
    images: ["/chtextiles1.png", "/chtextiles2.png", "/chtextiles3.png"],
    category: "mobile",
    status: "completed",
    liveUrl: null,
    githubUrl: null,
    features: ["Catalogue dynamique", "Gestion stocks", "Paiement mobile", "Suivi commandes"],
    year: 2024
  },
  {
    id: 12,
    title: "Site E-commerce Huile d'Olive",
    description: "Plateforme de vente en ligne spécialisée dans les produits d'huile d'olive premium.",
    fullDescription: "Boutique en ligne élégante mettant en valeur des produits d'huile d'olive de qualité. Design épuré mettant l'accent sur l'aspect premium des produits.",
    technologies: ["Next.js", "MongoDB", "Stripe", "Cloudinary", "SEO Optimization"],
    images: ["/olive1.png", "/olive2.png", "/olive3.png","/olive4.png"],
    category: "ecommerce",
    status: "completed",
    liveUrl: null,
    githubUrl: null,
    features: ["Design premium", "Paiement sécurisé", "Blog intégré", "Optimisation SEO"],
    year: 2024
  },
  {
    id: 13,
    title: "CRM Centre d'Appel",
    description: "Solution sur mesure pour centre d'appels avec suivi des appels et statistiques détaillées.",
    fullDescription: "CRM spécialisé pour centres d'appels avec gestion des tickets, historique des appels, performance des agents et tableaux de bord en temps réel.",
    technologies: ["Django", "PostgreSQL", "React", "WebRTC", "Analytics"],
    images: ["/callcenter1.png", "/callcenter2.png", "/callcenter3.png","/callcenter4.png","/callcenter5.png"],
    category: "web",
    status: "completed",
    liveUrl: null,
    githubUrl: null,
    features: ["Gestion appels", "Reporting temps réel", "Interface agent", "Supervision"],
    year: 2023
  },
  {
    id: 14,
    title: "Plateforme Recherche de Stages",
    description: "Site web connectant étudiants et entreprises pour des opportunités de stage.",
    fullDescription: "Plateforme collaborative permettant aux étudiants de trouver des stages adaptés et aux entreprises de publier leurs offres. Système de matching intelligent.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    images: ["/internship1.png", "/internship2.png", "/internship3.png"],
    category: "web",
    status: "completed",
    liveUrl: null,
    githubUrl: null,
    features: ["Matching intelligent", "Gestion candidatures", "Espace entreprise", "Alertes email"],
    year: 2021
  }
];

const categories = [
  { id: "all", label: "Tous les projets", icon: <FaLayerGroup />, count: projects.length },
  { id: "web", label: "Applications Web", icon: <FaGlobe />, count: projects.filter(p => p.category === "web").length },
  { id: "mobile", label: "Applications Mobile", icon: <FaMobileAlt />, count: projects.filter(p => p.category === "mobile").length },
  { id: "ecommerce", label: "E-commerce", icon: <FaShoppingCart />, count: projects.filter(p => p.category === "ecommerce").length },
  { id: "saas", label: "SaaS", icon: <FaCode />, count: projects.filter(p => p.category === "saas").length }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedProject, setExpandedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const nextImage = (projectId) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % (projects.find(p => p.id === projectId)?.images.length || 1)
    }));
  };

  const prevImage = (projectId) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + (projects.find(p => p.id === projectId)?.images.length || 1)) % 
                   (projects.find(p => p.id === projectId)?.images.length || 1)
    }));
  };

  const toggleExpand = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <div className={styles.container}>
      {/* Animated Background */}
      <div className={styles.backgroundAnimation}></div>

      {/* Header Section */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={styles.title}>
          <span className={styles.titleMain}>Portfolio de Réalisations</span>
          <span className={styles.titleSub}>{projects.length}+ projets innovants réalisés</span>
        </h1>
        
        {/* Search Bar */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Rechercher un projet, technologie..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        {/* Category Filters */}
        <div className={styles.categoryFilters}>
          {categories.map(category => (
            <motion.button
              key={category.id}
              className={`${styles.categoryButton} ${selectedCategory === category.id ? styles.active : ''}`}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={styles.categoryIcon}>{category.icon}</span>
              <span>{category.label}</span>
              <span className={styles.categoryCount}>({category.count})</span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        className={styles.projectsGrid}
        layout
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
            >
              {/* Project Status Badge */}
              <div className={`${styles.statusBadge} ${styles[project.status]}`}>
                {project.status === "in-progress" ? (
                  <>
                    <FaSpinner className={styles.spinning} />
                    En cours
                  </>
                ) : (
                  <>
                    <FaCheckCircle />
                    Terminé
                  </>
                )}
              </div>

              {/* Project Images Carousel */}
              <div className={styles.imageCarousel}>
                {project.images.length > 0 ? (
                  <>
                    <Image
                      src={project.images[currentImageIndex[project.id] || 0]}
                      alt={project.title}
                      width={400}
                      height={250}
                      className={styles.projectImage}
                    />
                    {project.images.length > 1 && (
                      <>
                        <button 
                          className={styles.carouselButton} 
                          onClick={() => prevImage(project.id)}
                          style={{ left: '10px' }}
                        >
                          ‹
                        </button>
                        <button 
                          className={styles.carouselButton} 
                          onClick={() => nextImage(project.id)}
                          style={{ right: '10px' }}
                        >
                          ›
                        </button>
                        <div className={styles.carouselDots}>
                          {project.images.map((_, idx) => (
                            <span
                              key={idx}
                              className={`${styles.dot} ${idx === (currentImageIndex[project.id] || 0) ? styles.active : ''}`}
                              onClick={() => setCurrentImageIndex(prev => ({ ...prev, [project.id]: idx }))}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className={styles.imagePlaceholder}>
                    <FaRocket size={48} />
                    <span>Visualisation en cours</span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className={styles.projectContent}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <span className={styles.projectYear}>{project.year}</span>
                </div>

                <p className={styles.projectDescription}>
                  {expandedProject === project.id ? project.fullDescription : project.description}
                </p>

                {/* Technologies Tags */}
                <div className={styles.technologies}>
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className={styles.techTag}>{tech}</span>
                  ))}
                </div>

                {/* Features List */}
                <div className={styles.features}>
                  {project.features.slice(0, expandedProject === project.id ? project.features.length : 3).map((feature, idx) => (
                    <span key={idx} className={styles.featureTag}>✓ {feature}</span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className={styles.actionButtons}>
                  <button 
                    className={styles.readMoreButton}
                    onClick={() => toggleExpand(project.id)}
                  >
                    <FaPlus />
                    {expandedProject === project.id ? 'Voir moins' : 'Voir plus'}
                  </button>

                  <div className={styles.externalLinks}>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.liveLink}
                      >
                        <FaExternalLinkAlt />
                        Voir le site
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.githubLink}
                      >
                        <FaGithub />
                        Code source
                      </a>
                    )}
                    {project.status === "in-progress" && (
                      <span className={styles.comingSoon}>
                        <FaPlayCircle />
                        Bientôt disponible
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div 
          className={styles.emptyState}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <FaCode size={64} />
          <h3>Aucun projet trouvé</h3>
          <p>Essayez de modifier vos critères de recherche</p>
        </motion.div>
      )}
    </div>
  );
}