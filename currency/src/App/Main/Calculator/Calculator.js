import React from "react";
import "./Calculator.css";

import Notification from "./Notification/Notification.js"
import Inputs from "./Inputs/Inputs.js"
import Wrapper from "../../../Wrapper/Wrapper.js"

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           
        }
    }
    render(){
        return(
            <Wrapper 
                section="section section-calculator" 
                container="container container-calculator" 
                main="main-calc animate__animated animate__fadeIn"
            >
                <h2 className="calculator-title">
                        Калькулятор обмена
                    </h2>
  
                <div className="calculator-wrapper-block">
                    <div className="calculator-block">
    
                        <div className="block-calculator-title">
                            Перевести:
                        </div>
                    
                        <Inputs currencyRateArr={this.props.currencyRateArr}/>
                    </div>
                    <Notification/>
                </div>
            </Wrapper>    
        )
    }
}

export default Calculator
