import React from "react";
import "./style.scss";
import { Link } from "react-router-dom/cjs/react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <p className="footer__text">
                Copyright © Pokemon | by{" "}
                <Link to="https://github.com/trungtrung-art/pokemon-app-react">Trungtrungcum</Link>
            </p>
        </div>
    );
}

export default Footer;
