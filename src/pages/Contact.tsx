import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import Modal from "../components/Modal";
import state from "../store";
import Antenna from "../models/Antenna";
import { motion } from "framer-motion";

export const ReactEmail = () => {
  const [buttonState, setButtonState] = useState("Send Message");
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);

  useEffect(() => {
    state.isContactPage = true;
    state.isBioPage = false;
    state.isInfoPage = false;
  }, []);

  const formik = useFormik({
    //we have created our initailValues object in a format EmailJS accepts
    initialValues: {
      from_name: "", //user name
      to_name: import.meta.env.VITE_APP_EMAILJS_USER_NAME, //email id of the admin
    //   subject: "", // subject of email
      reply_to: "", // user email
      message: "", // message of email
    },
    validationSchema: Yup.object({
      from_name: Yup.string().required("* Name field is required"),
    //   subject: Yup.string().required("* Subject field is required"),
      reply_to: Yup.string()
        .email("Invalid email address")
        .required("* Email field is required"),
      message: Yup.string().required("* Message field is required"),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      try {
        emailjs
          .send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            values,
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
          )
          .then(() => {
            setShowSuccessModal(true);
            setButtonState("Send Email");
            setSubmitting(false);
            resetForm();
          });
      } catch {
        setShowErrorModal(true);
        setButtonState("Send Email");
        setSubmitting(false);
      }
    },
  });
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

          <form className="contactForm__form" onSubmit={formik.handleSubmit}>

            <label htmlFor="from_name" className="contactForm__label"> Your Name: </label>
            {/* <span className="contactForm__title">Your Name</span> */}
            <input
              id="from_name"
              name="from_name"
              type="text"
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.from_name}
              placeholder="What's your name?"
              className="contactForm__input"
            />
            <div
              className={`expandable ${
                formik.touched.from_name && formik.errors.from_name
                  ? "show"
                  : ""
              }`}
            >
              {formik.errors.from_name}
            </div>

            <label htmlFor="reply_to" className="contactForm__label">Your Email:</label>
            {/* <span className="contactForm__title">Your email</span> */}
            <input
              id="reply_to"
              type="email"
              name="reply_to"
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.reply_to}
              placeholder="What's your email address?"
              className="contactForm__input"
            />
            <div
              className={`expandable ${
                formik.touched.reply_to && formik.errors.reply_to ? "show" : ""
              }`}
            >
              {formik.errors.reply_to}
            </div>

            {/* <label htmlFor="subject" className="contactForm__label">Email subject: </label>
            <input
              id="subject"
              name="subject"
              type="text"
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.subject}
              placeholder="Please specify an email subject."
              className="contactForm__input"
            />
            <div
              className={`expandable ${
                formik.touched.subject && formik.errors.subject ? "show" : ""
              }`}
            >
              {formik.errors.subject}
            </div> */}

            <label htmlFor="message" className="contactForm__label">Your Message: </label>
            {/* <span className="contactForm__title">Your Message</span> */}
            <textarea
              id="message"
              name="message"
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.message}
              placeholder="What do you want to say?"
              className="contactForm__input"
            />
            <div
              className={`expandable ${
                formik.touched.message && formik.errors.message ? "show" : ""
              }`}
            >
              {formik.errors.message}
            </div>

            <button
              disabled={formik.isSubmitting}
              type="submit"
              className="contactForm__submit"
            >
              <span>{buttonState}</span>
            </button>

          </form>
        </motion.div>
      </div>
    </HelmetProvider>
  );
};
