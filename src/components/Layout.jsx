import React from "react";
import { Link, Outlet,NavLink } from "react-router-dom";
import Logo from "./Logo";
import "../style/layout/Header.scss";
import "../style/layout/index.scss";
import '../style/layout/footer.scss'

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
              <NavLink
                to="/"
                aria-label="Revenir à l'accueil"
                className="nav__link"
              >
                Accueil
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/about"
                aria-label="aller à la page à propos"
                className="nav__link"
              >
                A propos
              </NavLink>
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
