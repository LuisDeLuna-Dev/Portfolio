import React from "react";
import styles from "../Css/Header.module.css";
import { useState } from "react";
import Logo from "../Assets/logo.svg?react";
import IconMenu from "../Assets/iconMenu.svg?react";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className={styles.headerContainer}>
      <header className={`${styles.header} container`}>
        <div>
          <ScrollLink
            to="apresent"
            smooth={true}
            offset={-999}
            duration={500}
            aria-label="Portfolio - Home"
          >
            <Logo className={styles.logo} />
          </ScrollLink>
        </div>
        <nav className={styles.navContainer}>
          <ul>
            <li>
              <ScrollLink
                to="sobreMim"
                smooth={true}
                offset={-200}
                duration={500}
              >
                Sobre Mim
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="projetos" smooth={true} duration={500}>
                Projetos
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="experiencia" smooth={true} duration={500}>
                Experiência
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="redes-contato" smooth={true} duration={500}>
                Redes de Contato
              </ScrollLink>
            </li>
          </ul>
        </nav>
        <button className={styles.mobileMenuIcon} onClick={toggleMenu}>
          <IconMenu />
        </button>
      </header>
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <ScrollLink to="sobreMim" smooth={true} offset={-75} duration={500}>
              Sobre Mim
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="projetos" smooth={true} offset={-40} duration={500}>
              Projetos
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="experiencia" smooth={true} duration={500}>
              Experiência
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="redes-contato" smooth={true} duration={500}>
              Redes de Contato
            </ScrollLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
