import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "./Logo";
import "../style/Header.scss";
import "../index.scss";
import '../style/footer.scss'

export default function Layout() {
  return (
    <div className="BigContainer">
      <header className="header container">
        <Link className="header__logo" to="/" aria-label="Revenir à l'accueil">
          <Logo label="Logo Kasa" />
        </Link>
        <nav aria-label="Menu principal">
          <ul className="nav">
            <li className="nav__item">
              <Link
                to="/"
                aria-label="Revenir à l'accueil"
                className="nav__link"
              >
                Accueil
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/about"
                aria-label="aller à la page à propos"
                className="nav__link"
              >
                A propos
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="footer">
            <Logo color="currentColor" />
            <p className="footer__credit">© 2020 Kasa - All rights reserved</p>
        </footer>
    </div>
  );
}
