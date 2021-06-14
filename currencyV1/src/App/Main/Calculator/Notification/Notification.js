import React from "react";
import "./Notification.css";

class NotificationElem extends React.Component{
    render(){
        return(
            <div className={this.props.class}>
                На нашем сайте мы используем cookie для сбора информации технического характера.<br/>
                В частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона ваше местоположения. 
                <button onClick={this.props.click}>OK</button>  
            </div>
        )
    }
}

class Notification extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
             class: "notification"
        };
        this.animateNotification = this.animateNotification.bind(this)
    }
    animateNotification(event){
        this.setState({
            class: "notification animate__animated animate__fadeOutUp",
        });
    }
    render(){
        return(
            <NotificationElem class={this.state.class} click={this.animateNotification}/>
        )
    }
}
export default Notification