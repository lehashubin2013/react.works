import React from "react";
import "./Nav.css";

import { Link } from "react-router-dom"  

class Nav extends React.Component{
    render(){
        return(
            <div className="nav-header-wrap">
                <nav className="nav-header">
                    <Link className="nav-header-link" to={"/home"}>
                        <span>Главная</span>
                    </Link>
                    <Link className="nav-header-link" to={"/about"}>
                        <span>О нас</span>
                    </Link>
                </nav>
            </div>  
        )
    }
}

export default Nav


