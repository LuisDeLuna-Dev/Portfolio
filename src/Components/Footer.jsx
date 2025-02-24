import React from "react";
import styles from "../Css/Footer.module.css";
import Logo from "../Assets/logoSimb.svg?react";

const Footer = () => {
  return (
    <div className="bgAlt">
      <div className={`${styles.FooterContainer} container`}>
        <p>
          Copyright © 2024 <span>LuisLuna-Dev.</span> Todos os direitos
          reservados.
        </p>
        <div className={styles.byLogo}>
          <p>Powered By</p>
          <Logo className={styles.Logo} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
