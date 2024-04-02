import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { slideIn } from "../utils/motion";

/**
 * The Contact component is the page that allows users to send
 * inquiries to the site owner.
 * @returns {JSX.Element} The rendered Contact component.
 */
const Contact = (): JSX.Element => {
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

  //6sCCuOD_pmcnhuxWQ
  //template_uaultqd
  //service_gpo4z5a

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        // import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        // import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        'service_gpo4z5a',
        'template_uaultqd',
        {
          from_name: form.name,
          to_name: "Andrzej Szczepanik",
          from_email: form.email,
          to_email: "aszczepanik2@gmail.com",
          message: form.message,
        },
        // import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        '6sCCuOD_pmcnhuxWQ'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className="contactForm"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="contactForm__container"
      >
        {/* <p className="contactForm__title">Get in touch</p> */}
        <h3 className="contactForm__subtitle">Contact</h3>

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
              placeholder="What's your good name?"
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
              placeholder="What's your web address?"
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
              placeholder="What you want to say?"
              className="contactForm__label__input"
            />
          </label>

          <button
            type="submit"
            className="contactForm__label__submit"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div> */}
    </div>
  );
};

export default Contact;
