import React from "react";
import "./Inputs.css";

import Result from "../Result/Result.js"

class Inputs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currencyInput: "",
            currencySelect: "",
            result: 0
        }
        this.calcRate = this.calcRate.bind(this)
        this.setValueInput = this.setValueInput.bind(this)
        this.setValueSelect = this.setValueSelect.bind(this)
    }
    static getDerivedStateFromProps(props, state){
        return {
            currencyRate: props.currencyRateArr
        }
    }
    calcRate(e){
        e.preventDefault()
        let elem = e.target.elements
        this.setState({
            result: +(elem[0].value / this.state.currencyRate[elem[1].value])
        })
    }
    setValueInput(){
        this.setState({
            currencyInput: this.value
        })
    }
    setValueSelect(){
        this.setState({
            currencySelect: this.value
        })
    }
    render(){
        return(
            <div> 
                <form className="inputs-calculator-block" onSubmit={this.calcRate}>
                    <input defaultValue={this.state.currencyInput} onInput={this.setValueInput} type="text" className="text-calculator" name="currency-input" />

                    <select className="select-calculator" name="currency-select" onChange={this.setValueSelect}>
                        {Object.keys(this.state.currencyRate).map((key, i) => (
                            <option key={key} defaultValue={key}>{key}</option>
                        ))}
                    </select>

                    <input value="OK" type="submit" className="submit-calculator" name="calc-input" />
                </form>
                <Result currancy={this.state.result.toFixed(2)}/>
            </div>
        )
    }
}

export default Inputs
