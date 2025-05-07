"use client"; 

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Home.module.css";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const fullText = "Ingénieur en développement logiciel";

const Home = () => {
  const router = useRouter();
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const speed = deleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayedText(fullText.slice(0, index + 1));
        setIndex(index + 1);
        if (index + 1 === fullText.length) {
          setTimeout(() => setDeleting(true), 1500);
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

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className={styles.heading}>{displayedText}</h1>

          <p className={styles.subheading}>
            Innovante et orientée résultats, forte d&#39expériences en développement frontend, backend et d&#39applications mobiles.
            <br />
            Habile dans la conception et la mise en œuvre de solutions scalables et efficaces en environnement Agile.
            <br />
            Passionnée par les technologies de pointe, j&#39excelle dans l&#39optimisation des processus et la collaboration interdisciplinaire.
          </p>
          <motion.button
            className={styles.ctaButton}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => router.push("/projects")}
          >
            Découvrez mon travail
          </motion.button>
        </motion.div>

        <motion.div
          className={styles.heroImage}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className={styles.circleImage}>
            <Image
              src="/souhir.png"
              alt="Hero Image"
              width={300}
              height={300}
              className={styles.roundImage}
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
