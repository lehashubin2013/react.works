import React from "react";
import "../Agreement.css";

import Wrapper from "../../Wrapper/Wrapper.js"

class Main extends React.Component{
  render(){
    return(
      <Wrapper 
        section="section section-main-agreement"
        container="container container-main-agreement"
        main="animate__animated animate__fadeIn"
      >
        <h2>Соглашение о использовании сервиса</h2>
            
        <div>При использовании сервисов Компании Пользователь не вправе:</div> 
        <ul>
            <li>нарушать права третьих лиц и/или причинять им вред в любой форме</li> 
            <li>загружать, посылать, передавать или любым другим способом размещать и/или распространять контент, при отсутствии прав на такие действия согласно законодательству или каким-либо договорным отношениям</li>   
            <li>несанкционированно собирать и хранить персональные данные других лиц</li>   
            <li>нарушать нормальную работу веб-сайта и сервисов Компании</li>  
            <li>содействовать действиям, направленным на нарушение ограничений и запретов, налагаемых Соглашением</li>  
            <li>другим образом нарушать нормы законодательства, в том числе нормы международного права</li>    
        </ul>
        <div>Так же:</div> 
        <ul>
            <li>персональные данные Пользователя обрабатывается в соответствии с ФЗ РФ «О персональных данных» № 152-ФЗ и законодательством ЕС в области защиты персональных данных.</li> 
        </ul>
      </Wrapper>
    )
  }  
}

export default Main