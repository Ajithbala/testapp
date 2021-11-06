import React from "react";
import {RowComponent} from "./rowcomponent";
export class TableComponent extends React.Component {

    constructor(props){
        super();
        this.rows= [0,1,2]
    }

    render(){
  console.log("table", this.props);
     const cellSelect =this.props.cellSelection
     const isSelected = this.props.isClicked;
       return (<table className="t-table">
           <thead></thead>
           <tbody>
       {this.props.rowIndexes.map(row=> <RowComponent index={row} key= {row}  isSelected ={isSelected}  cellSelect={cellSelect}  cellIndexes = {this.props.cellIndexes}  ></RowComponent>)}
       </tbody>
   </table>
       )       
    }

}