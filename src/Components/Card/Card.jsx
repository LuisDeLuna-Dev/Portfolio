import React from "react";
import styles from "./Card.module.css";

const Card = ({ description,logo: Logo, setDescricaoAtual }) => {
  return (
    <div
      className={styles.card}
      onMouseEnter={() => setDescricaoAtual(description)} 
      onMouseLeave={() => setDescricaoAtual("Passe o mouse sobre um card para ver a descrição.")}
    >
      <Logo className={styles.logo} />
    </div>
  );
};

export default Card;
