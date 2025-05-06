import { useRef, useState } from "react";
import styles from "./Contact.module.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2w3lfeo", "template_gydjnjs", form.current, "udAl8Gz3nuRi6iPno")
      .then(
        () => {
          setSent(true);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contactez-moi</h1>

      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <span>Afh Borj Cédria, Tunisie</span>
          </div>
          <div className={styles.infoItem}>
            <FaPhoneAlt className={styles.icon} />
            <span>53 123 640</span>
          </div>
          <div className={styles.infoItem}>
            <FaEnvelope className={styles.icon} />
            <span>souhirmanai9@gmail.com</span>
          </div>
          <div className={styles.infoItem}>
            <FaLinkedin className={styles.icon} />
            <a
              href="https://www.linkedin.com/in/souhir-manai-793aa2214"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/souhir-manai
            </a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <input type="text" name="name" placeholder="Nom et Prénom" required />
          <input type="text" name="phone" placeholder="Téléphone" required />
          <input type="email" name="email" placeholder="Adresse Email" required />
          <textarea name="message" placeholder="Message" required />
          <button type="submit">Envoyer</button>
          {sent && <p className={styles.success}>Message envoyé avec succès!</p>}
        </form>
      </div>
    </div>
  );
}
