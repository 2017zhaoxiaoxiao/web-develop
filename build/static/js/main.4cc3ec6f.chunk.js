(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{101:function(e,t,n){},257:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(95),o=n.n(r),u=(n(101),n(47)),c=n(6),i=n(7),s=n(9),h=n(8),p=n(10),m=n(46),d=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(h.a)(t).call(this))).handleInput=function(t){13===t.keyCode&&e.props.addTodo(t.target.value)},e.handleChange=function(t){e.setState(Object(m.a)({},t.target.name,parseInt(""==t.target.value?0:t.target.value)))},e.state=Object(m.a)({n1:0},"n1",0),e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("lable",{style:{color:"red",fontSize:50},htmlFor:"inp"},"\u8f93\u5165"),l.a.createElement("input",{id:"inp",name:"n1",onChange:this.handleChange,value:this.state.n1,onKeyDown:function(t){return e.handleInput(t)},type:"text"}),"+",l.a.createElement("input",{name:"n2",onChange:this.handleChange,value:this.state.n2,onKeyDown:function(t){return e.handleInput(t)},type:"text"}),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:this.state.n1+this.state}}),l.a.createElement("button",null,"\u67e5\u8be2"))}}]),t}(a.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h1",null,"\u6b63\u5728\u8fdb\u884c",this.props.a),l.a.createElement("ul",{className:"list"},this.props.todo.map((function(t,n){return l.a.createElement("li",{key:n},t,"---",l.a.createElement("button",{onClick:function(){return e.props.delTodo(n)}},"\u5220\u9664"))}))))}}]),t}(a.Component),f=(a.Component,n(102),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(h.a)(t).call(this))).state={data:[]},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.apiopen.top/musicRankingsDetails?type=1").then((function(e){return e.json()})).then((function(t){e.setState({data:t.result}),console.log(t)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"\u8bf7\u6c42\u63a5\u53e3"),l.a.createElement("ul",null,this.state.data.map((function(e,t){return l.a.createElement("li",{key:t},l.a.createElement("h2",null,e.album_title),l.a.createElement("p",null,e.author))}))))}}]),t}(a.Component)),E=n(28);a.Component,n(120);o.a.render(l.a.createElement(f,null),document.getElementById("root"));l.a.createElement("div",{id:"box"},"hello react",l.a.createElement("h3",{id:"box2"},"hello"))},96:function(e,t,n){e.exports=n(257)}},[[96,1,2]]]);
//# sourceMappingURL=main.4cc3ec6f.chunk.js.map