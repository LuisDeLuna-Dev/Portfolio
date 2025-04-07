import React from "react";
import style from "../Css/SobreMim.module.css";
import Perfil from "../Assets/Chat.png";
import Linkedin from "../Assets/logo/linkedin.svg";
import GitHub from "../Assets/logo/github.svg";
import Wpp from "../Assets/logo/whatsapp.svg";
import Email from "../Assets/logo/email.svg";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

const SobreMim = () => {
  return (
    <Element name="sobreMim">
      <motion.div
        className={style.sobremimContainer}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.img
          src={Perfil}
          className={style.perfil}
          alt="Foto Perfil"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <motion.section
          className={style.descricao}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h2
            className={style.quemSou}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Quem sou
          </motion.h2>

          <motion.h1
            className={style.meuNome}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Luis Luna
          </motion.h1>

          <motion.h2
            className={style.frontEnd}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Front-end Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Meu nome é Luis. Sou um estudante dedicado ao desenvolvimento web,
            estou em busca da minha primeira oportunidade na área. Atualmente
            concluindo minha graduação em Análise e Desenvolvimento de Sistemas
            na Anhanguera e tenho me concentrado em aprender e aplicar conceitos
            de front-end, como performance, animações, e responsividade.
          </motion.p>

          <motion.div
            className={style.contatos}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[Linkedin, GitHub, Wpp, Email].map((icon, index) => (
              <motion.a
                key={index}
                href={
                  [
                    "https://www.linkedin.com/in/luisdluna/",
                    "https://github.com/LuisDeLuna-Dev",
                    "https://wa.me/+552187607870",
                    "https://mail.google.com/mail/?view=cm&fs=1&to=lui.fernando1567887@gmail.com&su=Sobre%20Seu%20Portfolio",
                  ][index]
                }
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.img
                  className={style.logoContato}
                  src={icon}
                  alt=""
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.section>
      </motion.div>
    </Element>
  );
};

export default SobreMim;
