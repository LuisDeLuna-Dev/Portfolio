import React from "react";
import styles from "../Css/Projetos.module.css";
import Dogs from "../Assets/Projetos/Dogs.png?react";
import Forest from "../Assets/Projetos/Forest.png?react";
import BikCraft from "../Assets/Projetos/Bik.png?react";
import Animais from "../Assets/Projetos/Animais.png?react";
import Lobo from "../Assets/Projetos/Lobo.png?react";
import { Element } from "react-scroll";

import Card from "./Projetos/Projeto";

const Projetos = () => {
  return (
    <Element name="projetos">
      <div className={styles.projetosBg}>
        <h1 className={styles.titulo}>
          Projetos<span>.</span>
        </h1>
        <div className={`${styles.projetos} container`}>
          <Card
            title="BikCraft"
            description="Loja de bicicletas personalizadas feitas a mão, com design e tecnologia."
            image={BikCraft}
          />
          <Card
            title="Forest"
            description="Uma empresa de alocação de locais na natureza para eventos e acampamentos."
            image={Forest}
          />
          <Card
            title="Dogs"
            description="Rede social onde todos podem compartilhar fotos e informações de seus pets."
            image={Dogs}
          />
          <Card
            title="Animais Fantásticos"
            description="Algumas curiosidades sobre animais. Utilizado consumo de API."
            image={Animais}
          />

          <Card
            title="Lobo"
            description="Portfólio de um Designer de UI/UX com um design minimalista e elegante."
            image={Lobo}
          />
          <Card
            title="Em Andamento.."
            description="Projeto em andamento, aguarde novidades."
            image={null}
          />
        </div>
      </div>
    </Element>
  );
};

export default Projetos;
