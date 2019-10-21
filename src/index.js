import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

 import Todolist from './Workone/Todolist'
// import Request from './Request';
// import ShowTime from './showTime';
//import {ShowTime} from './showTime'
// import Parent from './Context/Parent';
 import {con}from './Context/Context';
import Hoc from './Hoc/Hoc'
import Portals from './Portal/Portals';
import ParentPortal from './Portal/ParentPortal';
import App from './App';
let color = 'red';

ReactDOM.render(
    <Todolist/>,
	 document.getElementById('root')
); 

//组件交互
//父组件->子组件:调用时在子组件上添加属性
//在子组件中通过props获取数据
//子组件->父组件传递数据，调用子组件时往子组件传递一个函数
//子组件通过props调用该函数

//1、JSX 语法

// var str ='hell react';
// var ele=<h1>{str}</h1>;
// ReactDOM.render(ele, 
//     document.getElementById('root'));


//react创建元素后不可改变,如何更新渲染元素
// function tick(){ 
//     var ele = <div>
//                 <h1>
//                     {new Date( ).toLocaleString()}
//                 </h1>
//               </div> ; 
//     ReactDOM.render(ele, document.getElementById('root')); 
// } 
// setInterval(tick, 1000);

// jsx表达式会被react转成一个对象
var ele = React.createElement(
    'div',
    {'id':'box'},
    'hello react',
    React.createElement(
        'h3',
        {'id':'box2'},
        'hello'
    )       
);


var obj={
    type:'div',
    props:{
        id:'box',
        class:'top',
        children: ['hello',{
            type: 'h1',
            props: {
                id: 'h',
                class: 'h',
                children: ['react']
            }
        }]
    }
}
//加载html文件、浏览器解析html生成DOM树
//link加载css文件，解析每条css规则，和DOM树结合生成render tree(渲染树)、浏览器的渲染引擎渲染render tree

//页面回流（重排）：页面重新渲染一遍，内容改变，大小改变，结构改变(减少回流)
//页面重绘：把字体颜色，背景颜色等样式改变

//1、node.offsetLeft\node.offsetWidth等慎用
// var root=document.getElementById('root');
// var width =root.offsetWidth;
// setInterval(function(){
//     width+=1;
//     root.style.width=width+'px';
// },100)

//display width,height,font-size改变会引起页面回流
//document.body.style.width='100px';不建议，因为每改一条都要回流一次
//2、建议声明一个css类
// .change{
//     width:100px;
// }
// document.body.className = 'change';

//3、对节点的操作先用变量代替
// console.time('a');
// var str = '';
// for(var i=0;i<1000;i++){
//     str += '<li>'+i+'</li>';
// }
// document.body.innerHTML = str;只会回流一次，性能好
// console.timeEnd('a');
function render(obj,container){
    var {type,props} = obj;
    //文档碎片
    var fr = document.createDocumentFragment();
    var ele = document.createElement(type);
    for(var item in props){
        if(item === 'class'){
            ele.className = props[item];
        }else if(item === 'children'){
            for(var i=0;i<props[item].length;i++){
                if(typeof props[item][i] === 'object'){
                    render(props[item][i],ele);
                }else{
                    var txt = document.createTextNode(props[item][i]);
                    ele.appendChild(txt);
                }
            }
        }else{
            ele[item] = props[item];
        }
    }
    fr.appendChild(ele);
    container.appendChild(fr);
    
}
// render(obj, 
//     document.getElementById('root')); 

//组件,组件名大写字母开头
// function Hello( props ) { 
// 	return <h1>Hello { props.name }</h1>
// } 
// ReactDOM.render(
// 	<Hello name="React"/>, document.getElementById('root')
// ); 


//1、通过函数定义组件（无生命周期函数）
//当只是渲染结构的时候，就用函数定义
function Todo(props){
    return (
        <div>
            {/* 条件渲染 */}
            {props.list.length>=4&&<h1>todo</h1>}
            {props.list.length>=4?<h1>todo</h1>:''}
            {
                props.list.map((item,index)=>{
                    
                if(index%2===0){
                    return <li key={item}>{item}</li>
                }
                })

            }
            <ul>
                {
                    // 循环渲染
                props.list.map(function(item,index){
                    return <li key={index}>{item}</li>
                })
                }
            </ul>
         </div>   
    )
}

//var item =[<li>1</li>,<li>2</li>,<li>3</li>,<li>4</li>,<li>5</li>];
// var item=[1,2,3,4];
// ReactDOM.render(
// 	<Todo list={item}/>, document.getElementById('root')
// ); 




