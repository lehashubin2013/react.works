import React from "react";
import "./App.css";
import { Suspense, lazy } from 'react';

import Preloader from "../Preloader/Preloader.js"

const BodyApp = lazy(() => import('./BodyApp.js'));


class App extends React.Component{
  render(){
    return(
        <Suspense fallback={<Preloader/>}>
            <BodyApp />
        </Suspense>
    )
  }  
}

export default App