import React from "react";
import "./Header.css";

import Nav from "../Nav/Nav.js";
import { Link } from "react-router-dom" 

class Header extends React.Component{
    render(){
        return(
            <header className="section section-header">
                <div className="container container-header">
                    <h1 className="title-header">
                        <Link className="nav-header-link" to={"/home"}>
                            <span>Currency</span>
                        </Link>
                    </h1>
                </div>
                <Nav/>
            </header>
        )
    }
}

export default Header


