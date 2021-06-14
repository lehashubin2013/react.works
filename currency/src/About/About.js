import React from "react";
import "./About.css";

import Header from "../App/Header/Header.js"
import Footer from "../App/Footer/Footer.js"
import Main from "./Main/Main.js"

class About extends React.Component{
  render(){
    return(
      <div className="body">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }  
}

export default About