import React from "react";
import "./Course.css";

class Course extends React.Component{
    render(){
        return(
            <div className="block-course animate__animated animate__fadeIn"> 
                <div className="block-course-title">
                   {this.props.title}
                </div>
                
                <div className="block-course-nums">{this.props.currency}*</div>
                <p className="block-course-nums">* Можно купить за 1 EUR</p>
            </div>
        )
    }
}

export default Course
