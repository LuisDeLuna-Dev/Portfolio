import React from "react";
import styles from "../Css/Header.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo.svg?react";
import IconMenu from "../Assets/iconMenu.svg?react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  
  return (
    <div className={styles.headerContainer}>
      <header className={`${styles.header} container`}>
        <div>
          <Link to="/" aria-label="Portfolio - Home">
            <Logo className={styles.logo} />
          </Link>
        </div>
        <nav className={styles.navContainer}>
          <ul>
            <li>
              <Link className={styles.NavLink} to="#sobreMim">
                Sobre Mim
              </Link>
            </li>
            <li>
              <a href="#projetos">Projetos</a>
            </li>
            <li>
              <a href="#experiencia">Experiência</a>
            </li>
            <li>
              <a href="#redes-contato">Redes de Contato</a>
            </li>
          </ul>    
        </nav>
        <button className={styles.mobileMenuIcon}
            onClick={toggleMenu}>
            <IconMenu />
          </button>
      </header>
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <a href="#sobreMim">Sobre Mim</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#experiencia">Experiencia</a>
          </li>
          <li>
            <a href="#redes-contato">Redes de Contato</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
