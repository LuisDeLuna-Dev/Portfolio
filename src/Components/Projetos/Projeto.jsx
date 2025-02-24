import React from "react";
import styles from "./Projeto.module.css";

const Projeto = ({ title, description, image }) => {
  const hasImage = image !== null;

  return (
    <div>
      <div className={`${styles.card} ${hasImage ? styles.cardWithImage : ""}`}>
        {hasImage && <img src={image} className={styles.perfil} alt="" />}
        <h2>{title}</h2>
        <p>{description}</p>
        <a className={styles.link} href="">
          Visualizar Projeto
        </a>
      </div>
    </div>
  );
};

export default Projeto;
