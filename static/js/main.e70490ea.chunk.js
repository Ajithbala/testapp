(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),l=n.n(c),o=(n(14),n(6),n(8)),s=n(1),i=n(2),u=n(4),d=n(3),p=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this)).counter=0,a.clicked=!1,a.isEvenClick=!1,a.state={isClicked:!1,counter:0},a}return Object(i.a)(n,[{key:"renderXoX",value:function(e){var t;(this.setState((function(e){return{counter:e+1}})),this.state.counter%2===0)?((t=document.createElement("img")).classList.add("t-image"),t.src="images/x.png",e.target.appendChild(t)):((t=document.createElement("img")).classList.add("t-image"),t.src="images/o.png",e.target.appendChild(t));console.log("xox render")}},{key:"render",value:function(){return console.log(this.props),r.a.createElement("td",{className:"t-rowcell",onClick:this.renderXoX.bind(this),index:this.props.index})}}]),n}(r.a.Component),h=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this)).cells=[0,1,2],a}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.cellSelect,t=this.props.isSelected;return console.log("row",this.props),r.a.createElement("tr",{className:"t-row",index:this.props.index},this.props.cellIndexes.map((function(n){return r.a.createElement(p,{key:n,cellSelectCallBack:e,isSelected:t,index:n})})))}}]),n}(r.a.Component),m=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this)).rows=[0,1,2],a}return Object(i.a)(n,[{key:"render",value:function(){var e=this;console.log("table",this.props);var t=this.props.cellSelection,n=this.props.isClicked;return r.a.createElement("table",{className:"t-table"},r.a.createElement("thead",null),r.a.createElement("tbody",null,this.props.rowIndexes.map((function(a){return r.a.createElement(h,{index:a,key:a,isSelected:n,cellSelect:t,cellIndexes:e.props.cellIndexes})}))))}}]),n}(r.a.Component),v=r.a.createContext("light"),g=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this)).rows=[0,1,2],a.cells=[0,1,2],a.state={isClicked:!1,target:""},a}return Object(i.a)(n,[{key:"onCellSelect",value:function(e){console.log("cell select",e.target),this.setState({isClicked:!0,target:e.target})}},{key:"render",value:function(){var e=this.props;e.cellSelect,Object(o.a)(e,["cellSelect"]);return r.a.createElement(v.Provider,{value:this.state.target},r.a.createElement(m,{rowIndexes:this.rows,cellSelection:this.onCellSelect.bind(this),isClicked:this.state.isClicked,cellIndexes:this.cells}))}}]),n}(r.a.Component);var b=function(){return r.a.createElement(g,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.e70490ea.chunk.js.map