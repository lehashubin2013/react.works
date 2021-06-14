import React from "react";
import "./Result.css";


class Result extends React.Component{
    render(){
        return(
          <div className="result-calculator">
              <span>Результат:</span>
              <div className="result-calculator-block">{this.props.currancy} EUR</div>
          </div>
        )
    }
}

export default Result
