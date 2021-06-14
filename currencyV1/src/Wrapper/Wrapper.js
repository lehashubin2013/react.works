import React from "react";

class Wrapper extends React.Component{
  render(){
    return(
      <div className={this.props.section}>
        <div className={this.props.container}>
            <div className={this.props.main}>
                {this.props.children}
            </div>
        </div>
      </div>
    )
  }  
}

export default Wrapper