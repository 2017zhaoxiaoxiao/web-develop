import React,{Component} from 'react';
import Todoinput from './Todoinput'
import Todoing from './Todoing'
import { exportDefaultSpecifier } from '@babel/types';
//import PorpTypes from 'prop-type';

var num=localStorage.length;
for(let a=0;a<localStorage.length;a++){
    let key=localStorage.key(a);
    if(key>num)
        num=key;
}

export default class Todolist extends Component{
    
    constructor(){
        super();
        var todo=[];
        var todone=[];
       
        for(var j=0;j<localStorage.length;j++){
            var o=JSON.parse(localStorage.getItem(localStorage.key(j)));
            if(o.done===false){
                todo.push(o);
                   
            }
            else {
                todone.push(o);
            }
        }
        this.state={
            todo:todo,
            todone:todone
        }
     
    }
    addItem=(msg)=>{
        
        var obj={"name":msg,done:false};
        var todo=[...this.state.todo,obj];
        num++;
        this.setState({
            todo: todo
        },()=>{
            localStorage.setItem(num,JSON.stringify(obj));
        });
    }
    addItem2=(item,key)=>{

        var todone=[...this.state.todone,item];
        var todo=[...this.state.todo];
        var obj=todo[key];
        todo.splice(key,1);
        this.setState({
            todone:todone,
            todo:todo
           
        },()=>{
            for(var n=0;n<=num;n++){
                
                var o=JSON.stringify(obj);
                if(localStorage.getItem(localStorage.key(n))===o){
                    obj.done=true;
                    localStorage.setItem(localStorage.key(n),JSON.stringify(obj));
                }
            }
            
        })
    }
    addItem3=(item,key)=>{
       
        var todo=[...this.state.todo,item];
        var todone=[...this.state.todone];
        var obj = todone[key];
        todone.splice(key,1);
        this.setState({
            todo:todo,
            todone:todone  
        },()=>{
            for(var n=0;n<=num;n++){
                var o=JSON.stringify(obj);
                if(localStorage.getItem(localStorage.key(n))===o){
                    obj.done=false;
                    localStorage.setItem(localStorage.key(n),JSON.stringify(obj));
                }
            }
        })
    }
    delItem=(a,item)=>{
        var todo=[...this.state.todo];
       
        todo.splice(a,1);
        this.setState(
            {todo:todo}
        ,()=>{ 
           
            for(var n=0;n<=num;n++){
                var o=JSON.stringify(item);
                if(localStorage.getItem(localStorage.key(n))===o){
                   
                    localStorage.removeItem(localStorage.key(n));
                }
            }
        })
    }
    delItem2=(a,item)=>{
        var todone=[...this.state.todone];
        
        todone.splice(a,1);
        this.setState(
            {todone:todone}
        ,()=>{
           
            for(var n=0;n<=num;n++){
                var o=JSON.stringify(item);
                if(localStorage.getItem(localStorage.key(n))===o){
                    
                    localStorage.removeItem(localStorage.key(n));
                }
    
                 
            }
        })
        
    }
    render() {
        return (
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Todoing delTodo={this.delItem} delTodone={this.delItem2} todone={this.state.todone} todo={this.state.todo} addTodone={this.addItem2} addTodo2={this.addItem3}/>
            </div>
        )
    }
}
