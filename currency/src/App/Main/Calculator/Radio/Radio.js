import React from "react";
import "./Radio.css";


class Radio extends React.Component{
    render(){
        return(
            <div className="radio-block"> 
                <input type="radio" className="radio-calculator" name="radio-button" />
                <label className="label-calculator">{this.props.inner}</label>
            </div>
        )
    }
}

export default Radio
