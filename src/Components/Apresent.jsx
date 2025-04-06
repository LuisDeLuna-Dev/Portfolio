import React, { useEffect, useState } from "react";
import styles from "../Css/Apresent.module.css";
import Simb from "../Assets/simb.svg?react";
import { Element } from "react-scroll";
import Typewriter from "react-typewriter-effect";

const Apresent = () => {
  const [textAlign, setTextAlign] = useState("left");
  const [fontSize, setFontSize] = useState("1.2rem");

  useEffect(() => {
    const handleResize = () => {
      setTextAlign(window.innerWidth <= 1250 ? "center" : "left");
      setFontSize(window.innerWidth <= 600 ? "12px" : "1.2rem");
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

            <div className={styles.typingWrapper}>
              <Typewriter
                text="Pronto para desenvolver, cooperar e aprender funcionalidades novas na sua empresa."
                typeSpeed={70}
                cursorColor="#8235ff"
                textStyle={{
                  fontSize: fontSize,
                  color: "darkgray",
                  fontWeight: "normal",
                  fontFamily: "Poppins, sans-serif",
                  textAlign: textAlign,
                }}
              />
            </div>

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
