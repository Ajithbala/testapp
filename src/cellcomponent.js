import React from "react";
// import xImage from "./public/images/x.png";
// import oImage from "../public/images/o.png";
import {CellElement} from "./tictactoe";
export class CellComponent extends React.Component {

    constructor(props){
        super();
        this.counter = 0;
        this.clicked = false;
this.isEvenClick = false;
this.state = {isClicked: false, counter: 0};
    }

    renderXoX(args){
        
        this.setState((prevstate)=> {return {counter: prevstate+1 }});
        if(this.state.counter %2===0){
            var ele = document.createElement("img");
            ele.classList.add("t-image");
            ele.src="images/x.png"
            args.target.appendChild(ele);  
        } else{
            var ele = document.createElement("img");
            ele.classList.add("t-image");
            ele.src="images/o.png"
            args.target.appendChild(ele);  
        }
        console.log("xox render");
//         debugger;
//         if(this.props.isSelected){
// if(this.isEvenClick){

debugger;
 
// } else {
//     return  <img className="t-image" src="images/x.png"/>;
// }

     //   }
    }

    render(){
   console.log(this.props);
       return (
    <td className="t-rowcell"   onClick={this.renderXoX.bind(this)} index = {this.props.index}>


    </td>
       )
    }

}