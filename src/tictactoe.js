import  React from "react";
import './App.css';
import {TableComponent} from "./tablecomponent";
export const CellElement = React.createContext('light');

 
export class TicTacToeComponent extends React.Component{
    constructor(props){
        super()
        this.rows = [0,1,2];
        this.cells = [0,1,2];
        this.state = {
            isClicked : false, 
            target:""
        }

    }

onCellSelect(args){
    debugger;
console.log("cell select",args.target);
this.setState({isClicked:true, target:args.target});

}

    render(){
        const { cellSelect, ...rest } =this.props
    return (
        <CellElement.Provider value={this.state.target}>
        <TableComponent rowIndexes = {this.rows} cellSelection={this.onCellSelect.bind(this)} isClicked={this.state.isClicked}  cellIndexes={this.cells}></TableComponent>
        </CellElement.Provider>
    )
    }
}