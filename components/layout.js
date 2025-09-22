"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHome, 
  FaUser, 
  FaProjectDiagram, 
  FaEnvelope,
  FaBars,
  FaTimes,
  FaCode,
  FaLinkedin,
  FaGithub,
  FaFileDownload,
  FaHeart,
  FaCopyright
} from 'react-icons/fa';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { 
      href: '/', 
      label: 'Accueil', 
      icon: <FaHome />,
      description: 'Page principale'
    },
    { 
      href: '/about', 
      label: 'À Propos', 
      icon: <FaUser />,
      description: 'Mon parcours'
    },
    { 
      href: '/projects', 
      label: 'Projets', 
      icon: <FaProjectDiagram />,
      description: 'Mes réalisations'
    },
    { 
      href: '/contact', 
      label: 'Contact', 
      icon: <FaEnvelope />,
      description: 'Travaillons ensemble'
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/MANAISOUHIR_CV_FR.pdf';
    link.download = 'MANAISOUHIR_CV_FR.pdf';
    link.click();
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Navigation Bar */}
      <motion.nav 
        className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
      >
        <div className="nav-container">
          {/* Logo */}
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="logo-link" onClick={closeMenu}>
              <FaCode className="logo-icon" />
              <span className="logo-text">Souhir Manai</span>
              <div className="logo-glow"></div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="nav-desktop">
            <ul className="nav-links">
              {navItems.map((item, index) => (
                <motion.li key={item.href} whileHover={{ y: -2 }}>
                  <Link 
                    href={item.href}
                    className={`nav-link ${pathname === item.href ? 'active' : ''}`}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-label">{item.label}</span>
                    <div className="nav-underline"></div>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Social Links & CV Download */}
            <div className="nav-actions">
              <motion.a 
                href="https://www.linkedin.com/in/souhir-manai-793aa2214"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              
              <motion.button 
                className="cv-button"
                onClick={downloadCV}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFileDownload />
                <span>CV</span>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="menu-toggle"
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div 
                className="mobile-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
              />
              
              {/* Mobile Menu */}
              <motion.div 
                className="mobile-menu"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25 }}
              
              >
                <div className="mobile-header">
                  <div className="mobile-logo">
                    <FaCode className="mobile-logo-icon" />
                    <span className="mobile-logo-text">Souhir Manai</span>
                  </div>
                 
                </div>
<div   style={{backgroundColor:"black",padding:"5%"}}>
                <ul className="mobile-links">
                  {navItems.map((item) => (
                    <motion.li key={item.href} whileHover={{ x: 10 }}>
                      <Link 
                        href={item.href}
                        className={`mobile-link ${pathname === item.href ? 'active' : ''}`}
                        onClick={closeMenu}
                      >
                        <span className="mobile-icon">{item.icon}</span>
                        <div className="mobile-text">
                          <span className="mobile-label">{item.label}</span>
                          <span className="mobile-desc">{item.description}</span>
                        </div>
                        <div className="mobile-indicator"></div>
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <div className="mobile-actions">
                  {/* <button className="mobile-cv-btn" onClick={downloadCV}>
                    <FaFileDownload />
                    Télécharger mon CV
                  </button> */}
                  
                  <div className="mobile-social">
                    <a href="https://www.linkedin.com/in/souhir-manai-793aa2214" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin />
                    </a>
                    <a href="https://github.com/souhiir1" target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  </div>
                </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Navigation Glow Effect */}
        <div className="nav-glow"></div>
      </motion.nav>

      {/* Main Content with Full Width Background */}
      <main className="main-content">
        <div className="page-background">
          <div className="background-overlay"></div>
          <div className="background-particles"></div>
        </div>
        <div className="page-container">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-info">
              <div className="footer-logo">
                <FaCode className="footer-logo-icon" />
                <span>Souhir Manai</span>
              </div>
              <p className="footer-description">
                Ingénieure en développement logiciel passionnée par la création de solutions digitales innovantes.
              </p>
              <div className="footer-social">
                <a href="https://www.linkedin.com/in/souhir-manai-793aa2214" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/souhiir1" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <button onClick={downloadCV} className="footer-cv-btn">
                  <FaFileDownload />
                </button>
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-section">
                <h3>Navigation</h3>
                <ul>
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} onClick={closeMenu}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-section">
                <h3>Contact</h3>
                <ul>
                  <li>📧 souhirmanai9@gmail.com</li>
                  <li>📱 +216 53 123 640</li>
                  <li>📍 Afh Borj Cédria, Tunisie</li>
                </ul>
              </div>

              <div className="footer-section">
                <h3>Expertise</h3>
                <ul>
                  <li>Développement Full-Stack</li>
                  <li>Applications Mobile</li>
                  <li>Solutions SaaS</li>
                  <li>Intelligence Artificielle</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="copyright">
              <FaCopyright className="copyright-icon" />
              <span>{currentYear} Souhir Manai. Tous droits réservés.</span>
            </div>
            <div className="made-with">
              <span>Made with </span>
              <FaHeart className="heart-icon" />
              <span> using Next.js</span>
            </div>
          </div>
        </div>

        {/* Footer Glow Effect */}
        <div className="footer-glow"></div>
      </footer>

      {/* Floating Action Button for Mobile */}
      <motion.button 
        className="floating-cv"
        initial={{ scale: 0, y: 100 }}
        animate={{ scale: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={downloadCV}
      >
        <FaFileDownload />
        <span>CV</span>
      </motion.button>
    </>
  );
};

export default Layout;