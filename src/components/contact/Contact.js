import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="contact__heading">CONTACT</h2>
      <div className="contact__item">
        <p>Cep : 0535 323 75 37</p>
        <p>E-posta : aktaselman@gmail.com</p>
        <p>Adres : İstanbul / Bahçeşehir </p>
        <br />
        <a href="https://twitter.com/selmanaktss" target="blank">
          <img
            align="center"
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg"
            alt="selmanakts"
            height="30"
            width="40"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/selman-aktas-6336611a2/"
          target="blank"
        >
          <img
            align="center"
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
            alt="selmanakts"
            height="30"
            width="40"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
