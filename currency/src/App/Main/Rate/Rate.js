import React from "react";
import "./Rate.css";

import Course from "./Course/Course.js";
import Calculator from "../Calculator/Calculator.js"

class Rate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: '',
            currencyRate: {}
        }
        this.currency = ["USD","RUB","PHP","CAD"];
        this.result = {};
        this.getRate(); 
        this.parseDate = this.parseDate.bind(this);   
        this.month = {
            "01": "января",
            "02": "февраля",
            "03": "марта",
            "04": "апреля",
            "05": "мая",
            "06": "июня",
            "07": "июля",
            "08": "августа",
            "09": "сентября",
            "10": "октября",
            "11": "ноября",
            "12": "декабря"
        }
    }
    
    getRate(){
        fetch("https://api.exchangeratesapi.io/latest")
            .then(data => {
                return data.json()
            })
            .then(data => {
                for (let i = 0; i < this.currency.length; i++) {
                    this.result[this.currency[i]] = data.rates[this.currency[i]]
                }
                this.setState({
                    date: this.parseDate(data.date),
                    currencyRate: this.result
                });
            })
    }
    // Получаем массив курса валют

    parseDate(arr){
        let splitArr = arr.split("-");
        let monthStr, joinArr;
        for (const i in this.month) {
            if(splitArr[1] === i){  
                monthStr = this.month[i]
            }
        }
        joinArr = [splitArr[2],monthStr,splitArr[0]].join(" ")
        return joinArr
    }
    render(){
        return(
            <div className="section section-course">
                <div className="container container-course">

                    <h2 className="course-title animate__animated animate__fadeIn">
                        Курс валют за {this.state.date} года
                    </h2>

                    {Object.keys(this.state.currencyRate).map((key, i) => (
                        <Course 
                            key={key} 
                            title={key} 
                            currency={this.state.currencyRate[key].toFixed(2)}/>
                    ))}
                </div>
                <Calculator currencyRateArr={this.state.currencyRate}/>
            </div>
        )
    }
}

export default Rate
