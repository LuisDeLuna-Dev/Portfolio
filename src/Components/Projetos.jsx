import React from "react";
import styles from "../Css/Projetos.module.css";
import Dogs from "../Assets/Projetos/Dogs.png?react";
import Forest from "../Assets/Projetos/Forest.png?react";
import BikCraft from "../Assets/Projetos/Bik.png?react";
import Animais from "../Assets/Projetos/Animais.png?react";
import Lobo from "../Assets/Projetos/Lobo.png?react";
import { Element } from "react-scroll";
import Card from "./Projetos/Projeto";
import { motion } from "framer-motion";

const projetos = [
  {
    title: "BikCraft",
    description: "Loja de bicicletas personalizadas feitas a mão, com design e tecnologia.",
    image: BikCraft,
    link: "https://www.origamid.com/projetos/bikcraft/",
  },
  {
    title: "Forest",
    description: "Uma empresa de alocação de locais na natureza para eventos e acampamentos.",
    image: Forest,
    link: "https://forest.origam.id/",
  },
  {
    title: "Dogs",
    description: "Rede social onde todos podem compartilhar fotos e informações de seus pets.",
    image: Dogs,
    link: "https://dogs.origamid.dev/",
  },
  {
    title: "Animais Fantásticos",
    description: "Algumas curiosidades sobre animais. Utilizado consumo de API.",
    image: Animais,
    link: "https://www.origamid.com/projetos/animais-fantasticos/",
  },
  {
    title: "Lobo",
    description: "Portfólio de um Designer de UI/UX com um design minimalista e elegante.",
    image: Lobo,
    link: "https://www.origamid.com/projetos/portfolio/",
  },
  {
    title: "Em Andamento..",
    description: "Projeto em andamento, aguarde novidades.",
    image: null,
  },
];

const Projetos = () => {
  return (
    <Element name="projetos">
      <div className={styles.projetosBg}>
        <h1 className={styles.titulo}>
          Projetos<span>.</span>
        </h1>
        <div className={`${styles.projetos} container`}>
          {projetos.map((projeto, index) => {
            let initial;

            if (index % 3 === 0) {
              initial = { opacity: 0, x: -100 }; 
            } else if (index % 3 === 1) {
              initial = { opacity: 0, y: index === 1 ? -100 : 100 }; 
            } else {
              initial = { opacity: 0, x: 100 }; 
            }

            return (
              <motion.div
                key={index}
                initial={initial}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 * index }}
                viewport={{ once: true, amount: 0.7 }}
              >
                <Card
                  title={projeto.title}
                  description={projeto.description}
                  image={projeto.image}
                  link={projeto.link}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </Element>
  );
};

export default Projetos;
