import React from "react";
import style from "../Css/SobreMim.module.css";
import Perfil from "../Assets/Chat.png";
import Linkedin from "../Assets/logo/linkedin.svg";
import GitHub from "../Assets/logo/github.svg";
import Wpp from "../Assets/logo/whatsapp.svg";
import Email from "../Assets/logo/email.svg";
import { Element } from "react-scroll";

const SobreMim = () => {
  return (
    <Element name="sobreMim">
      <div className={style.sobremimContainer} name="sobreMim">
        <img src={Perfil} className={style.perfil} alt="Foto Perfil" />
        <section className={style.descricao}>
          <h2 className={style.quemSou}>Quem sou</h2>
          <h1 className={style.meuNome}>Luis Luna</h1>
          <h2 className={style.frontEnd}>Front-end Developer</h2>
          <p>
            Meu nome é Luis. Sou um estudante dedicado ao desenvolvimento web,
            estou em busca da minha primeira oportunidade na área. Atualmente
            concluindo minha graduação em Análise e Desenvolvimento de Sistemas
            na Anhanguera e tenho me concentrado em aprender e aplicar conceitos
            de front-end, como performance, animações, e responsividade.
          </p>
          <div className={style.contatos}>
            <a  href="https://www.linkedin.com/in/luisdluna/" target="_blank"><img className={style.logoContato} src={Linkedin} alt="" /></a>
            <a  href="https://github.com/LuisDeLuna-Dev" target="_blank"><img className={style.logoContato} src={GitHub} alt="" /></a>
            <a  href="https://wa.me/+552187607870" target="_blank"><img className={style.logoContato} src={Wpp} alt="" /></a>
            <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=lui.fernando1567887@gmail.com&su=Sobre%20Seu%20Portfolio" target="_blank"><img className={style.logoContato} src={Email} alt="" /></a>
          </div>
        </section>
      </div>
    </Element>
  );
};

export default SobreMim;
