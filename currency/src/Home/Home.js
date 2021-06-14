import React from "react";
import "./Home.css";

import Header from "../App/Header/Header.js"
import Footer from "../App/Footer/Footer.js"
import Rate from "../App/Main/Rate/Rate.js"

class Home extends React.Component{
  render(){
    return(
      <div className="body">
        <Header/>
        <Rate/>  
        <Footer/>
      </div>
    )
  }  
}

export default Home