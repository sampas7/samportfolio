import Header from '../components/Header'; // Importe o Header
import Footer from '../components/Footer'; // Importe o Footer
import { useState } from 'react';
import React from 'react';
import emailjs from 'emailjs-com';
import styles from '@/styles/Contact.module.css';
import Head from 'next/head';

const Contact = () => {

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  // Função para atualizar os dados do formulário
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Função para enviar o formulário
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage('Enviando...');

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,  // Usando a variável de ambiente
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,  // Usando a variável de ambiente
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! 
      )
      .then(
        (response) => {
          setStatusMessage('Mensagem enviada com sucesso!');
        },
        (error) => {
          setStatusMessage('Erro ao enviar mensagem. Tente novamente.');
        }
      );
  };

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
          <p className={styles.titlePages}>Dúvidas, ideias ou um papo descontraído? Me chama aí!</p>
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
          <h2 className={styles.title}>Envie uma mensagem</h2>
          <form onSubmit={sendEmail} className={styles.emailForm}>
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleInputChange}
              placeholder="Digite seu nome e sobrenome"
              className={styles.inputField}
              required
            />
            <input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleInputChange}
              placeholder="Digite seu e-mail"
              className={styles.inputField}
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Digite o assunto"
              className={styles.inputField}
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Sua mensagem..."
              className={styles.textareaField}
              required
            />
            <button type="submit" className={styles.submitButton}>
              Enviar
            </button>
          </form>
          {statusMessage && <p>{statusMessage}</p>}
        </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default Contact;