"use client";

import { useRef, useState, useEffect } from "react";
import styles from "./Contact.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaLinkedin, 
  FaPaperPlane,
  FaWhatsapp,
  FaGithub,
  FaClock,
  FaCheckCircle,
  FaRocket
} from "react-icons/fa";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [particles, setParticles] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  // Generate floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 8
    }));
    setParticles(newParticles);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm("service_2w3lfeo", "template_gydjnjs", form.current, "udAl8Gz3nuRi6iPno")
      .then(
        () => {
          setSent(true);
          setIsSubmitting(false);
          form.current.reset();
          setFormData({ name: "", phone: "", email: "", message: "" });
          
          // Auto-hide success message after 5 seconds
          setTimeout(() => setSent(false), 5000);
        },
        (error) => {
          console.error(error.text);
          setIsSubmitting(false);
        }
      );
  };

  const contactMethods = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "souhirmanai9@gmail.com",
      link: "mailto:souhirmanai9@gmail.com",
      color: "#e94560"
    },
    {
      icon: <FaPhoneAlt />,
      label: "Téléphone",
      value: "+216 53 123 640",
      link: "tel:+21653123640",
      color: "#4cc9f0"
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      value: "+216 53 123 640",
      link: "https://wa.me/21653123640",
      color: "#25D366"
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "Souhir Manai",
      link: "https://www.linkedin.com/in/souhir-manai-793aa2214",
      color: "#0077B5"
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Localisation",
      value: "Afh Borj Cédria, Tunisie",
      color: "#ff6b9d"
    },
    {
      icon: <FaClock />,
      label: "Disponibilité",
      value: "Immédiate",
      color: "#7209b7"
    }
  ];

  const whyChooseMe = [
    {
      icon: <FaRocket />,
      title: "Délais Respectés",
      description: "Livraison dans les temps avec qualité optimale"
    },
    {
      icon: <FaCheckCircle />,
      title: "Solutions Innovantes",
      description: "Approches créatives basées sur les dernières technologies"
    },
    {
      icon: <FaGithub />,
      title: "Code Qualitatif",
      description: "Standards industriels et meilleures pratiques"
    }
  ];

  return (
    <div className={styles.container}>
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

      <div className={styles.content}>
        {/* Header Section */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.title}>
            <span className={styles.titleMain}>Discutons de Votre Projet</span>
            <span className={styles.titleSub}>Transformons vos idées en réalité digitale</span>
          </h1>
          <div className={styles.headerDecoration}>
            <div className={styles.decorationDot}></div>
            <div className={styles.decorationDot}></div>
            <div className={styles.decorationDot}></div>
          </div>
        </motion.div>
    {/* Why Choose Me Section */}
            <div className={styles.whyChooseCard} style={{marginBottom:"40px"}}>
              <h2 className={styles.sectionTitle}>
                <FaCheckCircle className={styles.titleIcon} />
                Pourquoi Me Choisir ?
              </h2>
              <div className={styles.whyChooseGrid} >
                {whyChooseMe.map((reason, index) => (
                  <motion.div
                    key={reason.title}
                    className={styles.whyChooseItem}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <div className={styles.whyChooseIcon}>{reason.icon}</div>
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
        <div className={styles.mainContent}>
          {/* Left Side - Contact Information & Why Choose Me */}
          <motion.div
            className={styles.infoSection}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Contact Methods */}
            <div className={styles.contactCard}>
              <h2 className={styles.sectionTitle}>
                <FaPaperPlane className={styles.titleIcon} />
                Contact Direct
              </h2>
              <div className={styles.contactGrid}>
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.label}
                    href={method.link}
                    target={method.link?.startsWith('http') ? "_blank" : undefined}
                    rel={method.link?.startsWith('http') ? "noopener noreferrer" : undefined}
                    className={styles.contactMethod}
                    style={{ '--method-color': method.color }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className={styles.methodIcon} style={{ backgroundColor: method.color }}>
                      {method.icon}
                    </div>
                    <div className={styles.methodInfo}>
                      <span className={styles.methodLabel}>{method.label}</span>
                      <span className={styles.methodValue}>{method.value}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

      
            {/* Quick Stats */}
          
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className={styles.formSection}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className={styles.formCard}>
              <h2 className={styles.formTitle}>
                <FaPaperPlane className={styles.titleIcon} />
                Envoyez un Message
              </h2>
              <p className={styles.formSubtitle}>
                Discutons de votre projet et trouvons la meilleure solution ensemble
              </p>

              <form ref={form} onSubmit={sendEmail} className={styles.form}>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Votre nom complet"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Votre numéro de téléphone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Votre adresse email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <textarea
                    name="message"
                    placeholder="Décrivez votre projet ou demande..."
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={styles.formTextarea}
                  />
                </div>

                <motion.button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className={styles.spinner}></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Envoyer le Message
                    </>
                  )}
                </motion.button>

                <AnimatePresence>
                  {sent && (
                    <motion.div
                      className={styles.successMessage}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <FaCheckCircle />
                      <div>
                        <strong>Message envoyé avec succès!</strong>
                        <span>Je vous répondrai dans les plus brefs délais.</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
          

      </div>
    </div>
  );
}