import React from "react";
import styles from "../Css/Apresent.module.css";
import Simb from "../Assets/simb.svg?react";
import { Element } from "react-scroll";

const Apresent = () => {
  return (
    <Element name="apresent">
      <div className="container">
        <div className={styles.apresent}>
          <div className={styles.apresentText}>
            <h1>
              Codificando experiências{" "}
              <span className={styles.neg}>excepcionais </span> para{" "}
              <span className={styles.neg}>cativar</span> e{" "}
              <span className={styles.neg}>encantar</span> usuários em cada
              interação.
            </h1>
            <p>
              Pronto para desenvolver, cooperar e aprender funcionalidades novas
              na sua empresa.
            </p>
            <a className={styles.botSob} href="">
              Conheça mais sobre mim.
            </a>
          </div>
          <Simb className={styles.simb} />
        </div>
      </div>
    </Element>
  );
};

export default Apresent;
