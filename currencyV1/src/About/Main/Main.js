import React from "react";
import "../About.css";

import Wrapper from "../../Wrapper/Wrapper.js"

class Main extends React.Component{
  render(){
    return(
      <Wrapper 
        section="section section-main-about"
        container="container container-main-about"
        main="animate__animated animate__fadeIn"
      >
        <h2>О нас</h2>
        <ul>
            <li>Работаем с 2018 года в сфере финансов</li> 
            <li>Опытные сотрудники и программисты, которые следят за биржей обмена валют</li>   
            <li>Данные курса обновляются ежедневно, кроме субботы и воскресенья</li>   
            <li>Сотни положительных отзывов и предложений</li>    
        </ul>

        <h2>Контакты</h2>
        <ul>
          <li>Главный офис "Currency" находится по адресу: г.Москва, ул.Пушкина, д.34/2, второй этаж </li>    
        </ul>
      </Wrapper>
    )
  }  
}

export default Main