import React from 'react'
import style from '../Css/SobreMim.module.css'
import Perfil from "../Assets/perfil.png";

const SobreMim = () => {
    return (
        
            <div className={style.sobremimContainer}>
                <img src={Perfil} className={style.perfil} alt="Foto Perfil" />
                <section className={style.descricao}>
                    <h2 className={style.quemSou}>Quem sou</h2>
                    <h1 className={style.meuNome}>Luis Luna</h1>
                    <h2 className={style.frontEnd}>Front-end Developer</h2>
                    <p>Meu nome é Luis. Sou um estudante dedicado ao desenvolvimento web, estou em busca da minha primeira oportunidade na área. Atualmente concluindo minha graduação em Análise e Desenvolvimento de Sistemas na Anhanguera e tenho me concentrado em aprender e aplicar conceitos de front-end, como performance, animações, e responsividade.</p>
                </section>
            </div>
    );
};

export default SobreMim;
