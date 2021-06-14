import React from "react";
import "../Warranty.css";

import Wrapper from "../../Wrapper/Wrapper.js"

class Main extends React.Component{
  render(){
    return(
      <Wrapper 
        section="section section-main-warranty" 
        container="container container-main-warranty" 
        main="animate__animated animate__fadeIn"
      >
        <h2>Гарантии</h2>
        <ul>
          <li>Точный калькулятор валют</li> 
          <li>Надежность вычислений</li>   
          <li>Швейцарский источник</li>   
          <li>Сервера в Швейцарии </li>    
        </ul>
      </Wrapper>
    )
  }  
}

export default Main