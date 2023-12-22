import React, { useState } from "react";
import { ContactContainer, StyledForm } from "./styles";
import Button from "../../components/base/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContactFormMutation } from "../../services/contact";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [contactForm] = useContactFormMutation();

  const navigate = useNavigate();

  const formHandler = async (e) => {
    e.preventDefault();

    const formObj = { email, subject, message };
    console.log("------------", formObj);

    contactForm(formObj)
      .then(() => {
        navigate("/employees");
        toast.success("Message Sent Successfully");
        console.log("Message Sent Successfully");
      })
      .catch((err) => {
        toast.error("Message Failed" + err);
        console.log("Message Failed" + err);
      });
  };

  return (
    <ContactContainer>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.740330312843!2d74.2678794751422!3d31.476328549317557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919035c98924593%3A0x14df56825a822170!2sGigalabs%20(PVT)%20Limited!5e0!3m2!1sen!2s!4v1698058578287!5m2!1sen!2s"
          width="auto"
          height="350"
          style={{ border: "0" }}
          loading="lazy"
          title="Gigalabs"
        ></iframe>
      </div>

      <div>
        <h1>Get in touch with us!</h1>
        <StyledForm onSubmit={formHandler}>
          <input
            required
            minLength="3"
            maxLength="30"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            type="text"
            minLength="3"
            maxLength="30"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <input
            required
            minLength="3"
            maxLength="250"
            type="text"
            placeholder="Message"
            className="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button type="submit" label="Submit" />
        </StyledForm>
      </div>
    </ContactContainer>
  );
};

export default ContactUs;
