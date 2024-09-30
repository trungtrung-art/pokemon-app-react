import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

import logoGithub from "../../assets/image/logo-github.png";

function Header({ type, id }) {
    return (
        <div className={`header__container header__container--${type === "" || type === "all" ? "white" : type}`}>
            <a href="https://github.com/trungtrung-art/pokemon-app-react" target="_blank" className="link-github">
                <img src={logoGithub} className="logo-github" />
            </a>
            <header className={`header__title header__title--${type}`}>PokéDex</header>
        </div>
    );
}

export default Header;
