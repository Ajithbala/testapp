import React from "react";
import {CellComponent} from "./cellcomponent";

export class RowComponent extends React.Component {

    constructor(props){
        super();
this.cells= [0,1,2]

    }


    render(){
        const cellSelectFn =this.props.cellSelect
        const isSelected = this.props.isSelected;
        console.log("row",this.props);
    return <tr className="t-row"    index = {this.props.index}>{this.props.cellIndexes.map((cell)=> <CellComponent key={cell} cellSelectCallBack = {cellSelectFn}  isSelected = {isSelected}  index = {cell}></CellComponent>)}</tr>

       
    }

}