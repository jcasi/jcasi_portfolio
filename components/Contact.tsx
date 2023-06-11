import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {};

function Contact({}: Props) {
  //Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);

  //toggle handling for message confirmation
  const handleToggle = () => {
    setVisible((current) => !current);
  };

  //Validation state
  const [errors, setErrors] = useState({});

  //Setting button text
  const [buttonText, setButtonText] = useState("Send Message");

  //Setting success/failure states
  const [successMessage, setSuccessMessage] = useState(false);
  const [failsMessage, setFailMessage] = useState(false);

  //Validation check
  const handleValidation = () => {
    let tempErrors: { [index: string]: any } = {};
    let isValid = true;

    if (name.length <= 0) {
      tempErrors["name"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //Handle submit
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          name: name,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setSuccessMessage(false);
        setFailMessage(true);
        setButtonText("Send");
        return;
      }
      setSuccessMessage(true);
      setFailMessage(false);
      setButtonText("Send");
    }
    console.log(name, email, subject, message);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-200 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-light-slate text-2xl">
        &nbsp;Contact
      </h3>

      <div className="container mx-auto my-20 w-1/3">
        <div className="rounded p-5 space-y-5 shadow-md">
          <h4 className="text-center text-off-white text-4xl font-semibold">
            Get in touch
          </h4>
          <h3 className="text-2xl text-center">
            Want to work together? Contact me below.
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="rounded px-4 py-2 bg-dark-blue border border-outline-gray w-full"
              placeholder="Name"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="rounded px-4 py-2 bg-dark-blue border border-outline-gray w-full"
              placeholder="Email"
            />
            <input
              type="text"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              className="rounded px-4 py-2 bg-dark-blue border border-outline-gray w-full"
              placeholder="Subject"
            />
            <textarea
              cols={10}
              rows={5}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="rounded px-4 py-2 bg-dark-blue border border-outline-gray w-full"
              placeholder="Write your message..."
            />
            <button
              type="submit"
              className="rounded bg-light-slate text-dark-blue px-4 py-2 font-semibold w-full"
              onClick={handleToggle}
            >
              Send Message
            </button>
            {visible && <p className="text-center text-xl">Message sent!</p>}
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
