import React from "react";
import "./Preloader.css"

class PreloaderElem extends React.Component{
  constructor(props){
    super(props)
    this.refPreloader = React.createRef();
  }
  componentWillUnmount(){
    this.refPreloader.current.style.opacity = 0;
  }
  render(){
    return(
      <div ref={this.refPreloader} className="preloader">
          <div className="animate-elem">
          
          </div>   
      </div>
    )
  }  
}

class Preloader extends React.Component{
    render(){
      return(
        <PreloaderElem/>
      )
    }  
}

export default Preloader
