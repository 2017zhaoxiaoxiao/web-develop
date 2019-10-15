import React,{Component} from 'react';

import Todoinput from './Todoinput'
import Todoing from './Todoing'
//import PorpTypes from 'prop-type';


export default class Todolist extends Component{
    constructor(){
        super();
        this.state={
            todo:[1,2,3]
        }
        // var arr = [1,2,{a:100}];
        // 深拷贝
        // var b = JSON.parse(JSON.stringify(arr));
        // b[2].a = 200;
        // console.log(arr);

        // 对象的拷贝
        // var a= {a:100,b:200};
        // var o = Object.assign({},a);
        // console.log(o===a);
        // console.log(o);
        // Object.keys返回由属性名组成的一个数组
        // Object.keys(a).forEach((item)=>{
        //     console.log(item);
        //     console.log(a[item]);
        // })
        // 尽量不用for in
        // for(var item in a){
        //     console.log(a);
        // }
    }
    addItem=(msg)=>{
        this.setState({
            todo: [...this.state.todo,msg]
        });
    }



    



    delItem=(a)=>{
        //this.state.todo.splice(a,1);不要写，不要改变原数组，拷贝一份做相关操作
        //深拷贝和浅拷贝
        //状态（state）
        //不要直接改变。处理状态
        var todo=[...this.state.todo];
        todo.splice(a,1);
        //setState是异步的
        this.setState(
            {todo}
        )
    
    }
    render() {
        return (
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Todoing delTodo={this.delItem} todo={this.state.todo}/>
            </div>
        )
    }
}
// Todoing.protoTypes = {
//     todo: PorpTypes.array
// }
// Todoing.defaultProps = {
//     todo:[2,3,4],
//     a:100
// }

