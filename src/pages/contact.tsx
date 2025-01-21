import Header from "../components/Header"; // Importe o Header
import Footer from "../components/Footer"; // Importe o Footer
import React, { useState } from "react";
import styles from "@/styles/Contact.module.css";
import Head from "next/head";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;


      await emailjs.send(serviceID, templateID, formData, publicKey);
      setFeedbackMessage("E-mail enviado com sucesso!");
      setFormData({ from_name: "", from_email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setFeedbackMessage("Erro ao enviar e-mail. Tente novamente mais tarde.");
    } finally {
      setShowModal(true); // Mostrar modal
      setIsSubmitting(false);
    }
  };

  const closeModal = () => setShowModal(false);

  return (
    <div>
      <Head>
        <title>Contato</title>
        <meta name="description" content="Entre em contato com o Sampas (apenas, você sabe)" />
        <link rel="icon" href="/icons/mindsamp.png" />
      </Head>

      <Header />
      <main className={styles.mainContainer}>
        <div className={styles.titleTexts}>
          <p className={styles.titlePages}>
            Dúvidas, ideias ou um papo descontraído? Me chama aí!
          </p>
        </div>

        <div className={styles.contactSections}>
        <div className={styles.leftSection}>
          <h2 className={styles.title}>E-mail para contato</h2>
          <div className={styles.contactInfo}>
            <img
              src="/icons/Gmail.svg"
              alt="Ícone de E-mail"
              className={styles.icon}
            />
            <span>danielsampaiorch@gmail.com</span>
          </div>

          <h2 className={styles.title}>Prefere usar o WhatsApp?</h2>
          <div className={styles.contactInfo}>
            <a
              href="https://wa.me/55xxxxxxxxxx" 
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappLink}
            >
              <img
                src="/icons/WhatsApp.svg"
                alt="Ícone do WhatsApp"
                className={styles.icon}
              />
              <span>Clique aqui para entrar em contato</span>
            </a>
          </div>

          <h2 className={styles.title}>Confira minhas outras redes</h2>
          <div className={styles.socialMedia}>
            <div className={styles.socialItem}>
              <img src="/icons/LinkedIn.svg" alt="LinkedIn" className={styles.icon} />
              <span>/in/dsampaior</span>
            </div>
            <div className={styles.socialItem}>
              <img src="/icons/tool12.svg" alt="Github" className={styles.icon} />
              <span>/sampas7</span>
            </div>
            <div className={styles.socialItem}>
              <img src="/icons/Instagram.svg" alt="Instagram" className={styles.icon} />
              <span>/sampasx</span>
            </div>
            <div className={styles.socialItem}>
              <img src="/icons/SoundCloud.svg" alt="SoundCloud" className={styles.icon} />
              <span>/sampasx</span>
            </div>
          </div>
        </div>

          <div className={styles.rightSection}>
            <h2 className={styles.title}>Envie um e-mail</h2>
            <form onSubmit={handleSubmit} className={styles.emailForm}>
              <input
                type="text"
                name="from_name"
                placeholder="Digite seu nome e sobrenome"
                className={styles.inputField}
                value={formData.from_name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="from_email"
                placeholder="Digite seu e-mail"
                className={styles.inputField}
                value={formData.from_email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Digite o assunto"
                className={styles.inputField}
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Sua mensagem..."
                className={styles.textareaField}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>
            </form>
          </div>
        </div>
      </main>

      {showModal && (
          <div
            className={`${styles.modalOverlay} ${showModal ? styles.active : ""}`}
            onClick={closeModal}
          >
          <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
            <h2 className={styles.modalTitle}>Atenção!</h2>
            <p className={styles.modalMessage}>{feedbackMessage}</p>
            <button className={styles.modalButton} onClick={closeModal}>
              Fechar
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Contact;
