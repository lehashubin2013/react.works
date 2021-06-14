import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom"  

class Footer extends React.Component{
    render(){
        return(
            <footer className="section section-footer">
                <div className="conatiner container-footer">
                    <div className="footer-block-currency">2020 © Currency</div>
                    <div className="footer-block">
                        <Link to={"/warranty"}>
                            <span>Гарантии</span>
                        </Link>
                        <Link to={"/about"}>
                            <span>О нас</span>
                        </Link>
                        <Link to={"/about"}>
                            <span>Контакты</span>
                        </Link>
                        <Link to={"/agreement"}>
                            <span>Соглашение о использовании сервиса</span>
                        </Link>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer