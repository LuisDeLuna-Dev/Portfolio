import React, { useState } from 'react';
import styles from "../Css/Conhecimentos.module.css";
import LogoHtml from "../Assets/logo/html.svg?react";
import LogoCss from "../Assets/logo/css.svg?react";
import LogoJs from "../Assets/logo/javascript.svg?react";
import LogoReact from "../Assets/logo/react.svg?react";
import LogoTs from "../Assets/logo/typescript.svg?react";
import LogoNode from "../Assets/logo/node.svg?react";
import LogoTailwind from "../Assets/logo/tailwindcss.svg?react";
import LogoGit from "../Assets/logo/git.svg?react";
import LogoGithub from "../Assets/logo/github.svg?react";
import Card from './Card/Card.jsx';

const Conhecimentos = () => {
  const [descricaoAtual, setDescricaoAtual] = useState("Passe o mouse sobre um card para ver a descrição.");

  return (
    <div className={`${styles.ConhecimentosContainer} container`}>
      <div className={styles.conhecimentos}>
        <h1>Conhecimentos<span>.</span></h1>
        <p id="domconhecimento">{descricaoAtual}</p>
      </div>
      <div className={styles.ConhecimentosCard}>
        <Card 
          logo={LogoHtml} 
          description="HTML é uma linguagem de marcação utilizada na construção de páginas na Web." 
          setDescricaoAtual={setDescricaoAtual}
        />
        <Card
          logo={LogoCss}
          description="CSS é uma linguagem de estilo utilizada na construção de páginas na Web."
          setDescricaoAtual={setDescricaoAtual}
        />
        <Card
          logo={LogoJs}
          description="JavaScript é uma linguagem de programação utilizada na construção de páginas na Web."
          setDescricaoAtual={setDescricaoAtual}
        />
        <Card
          logo={LogoReact}
          description="React é uma biblioteca JavaScript para construção de interfaces de usuário."
          setDescricaoAtual={setDescricaoAtual}
        />
        <Card
          logo={LogoTs}
          description="TypeScript é um superconjunto de JavaScript que adiciona tipagem estática."
          setDescricaoAtual={setDescricaoAtual}
        />
        <Card
          logo={LogoNode}
          description="Node.js é um ambiente de execução JavaScript server-side."
          setDescricaoAtual={setDescricaoAtual}
        />
        <Card
          logo={LogoTailwind}
          description="Tailwind CSS é um framework CSS que permite a criação de designs customizados."
          setDescricaoAtual={setDescricaoAtual}
        />
        <Card
          logo={LogoGit}
          description="Git é um sistema de controle de versão distribuído."
          setDescricaoAtual={setDescricaoAtual}
        />
        <Card
          logo={LogoGithub}
          description="GitHub é uma plataforma de hospedagem de código-fonte e colaboração."
          setDescricaoAtual={setDescricaoAtual}
        />
      </div>
    </div>
  );
};

export default Conhecimentos;
