import React from "react";

import Home from "../Home/Home.js"
import About from "../About/About.js"
import Warranty from "../Warranty/Warranty.js"
import Argeement from "../Agreement/Agreement.js"

import {
  Route,
  Switch,
  Redirect,
} from "react-router-dom"

class BodyApp extends React.Component{
  render(){
    return(
      <div className="body">
        <Switch>
            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/warranty' component={Warranty} />
            <Route path='/agreement' component={Argeement} />
            <Redirect from='/' to='/home'/>
        </Switch>
      </div>
    )
  }  
}

export default BodyApp