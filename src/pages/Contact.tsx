import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// import { slideIn } from "../utils/motion";
import Antenna from "../models/Antenna";
// import { Helmet } from "react-helmet";
import state from "../store";
// import { useSnapshot } from "valtio";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Modal from "../components/Modal";

/**
 * The Contact component is the page that allows users to send
 * inquiries to the site owner.
 * @returns {JSX.Element} The rendered Contact component.
 */
const Contact = (): JSX.Element => {
  // const { isModalOpen } = useSnapshot(state);

  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });

  // useEffect(() => {
  // }, []);

  useEffect(() => {
    state.isContactPage = true;
    state.isBioPage = false;
    setLoading;
    state.isInfoPage = false;
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const [loading, setLoading] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);

  //6sCCuOD_pmcnhuxWQ
  //template_uaultqd
  //service_gpo4z5a

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Andrzej Szczepanik",
          from_email: form.email,
          to_email: "aszczepanik2@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          // state.isModalOpen = true;
          setShowSuccessModal(true);

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setShowErrorModal(true);
        }
      );
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Andrzej Szczepanik | Contact</title>
      </Helmet>

      {showSuccessModal && (
        <Modal
          content="Thank you. I will get back to you as soon as possible."
          closeModal={() => setShowSuccessModal(false)}
        />
      )}
      {showErrorModal && (
        <Modal
          content="Ahh, something went wrong. Please try again."
          closeModal={() => setShowErrorModal(false)}
        />
      )}

      <div className="contactForm">
        <div className="antenna">
          <Antenna />
        </div>
        <motion.div
          // variants={slideIn("left", "tween", 0.2, 1)}
          className="contactForm__container"
        >
          <h3 className="contactForm__subtitle">Make first contact!</h3>
          <h4>(or another one)</h4>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contactForm__form"
          >
            <label className="contactForm__label">
              <span className="contactForm__label__title">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="contactForm__label__input"
              />
            </label>
            <label className="contactForm__label">
              <span className="contactForm__label__title">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className="contactForm__label__input"
              />
            </label>
            <label className="contactForm__label">
              <span className="contactForm__label__title">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="contactForm__label__input"
              />
            </label>

            <button type="submit" className="contactForm__label__submit">
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      </div>
    </HelmetProvider>
  );
};

export default Contact;
