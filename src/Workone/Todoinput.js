import React, { Component } from 'react'


export default class Todoinput extends Component {
    constructor(){
        super();
        this.state={
            n:'添加Todo'
        }
    }

    handleInput=(e)=>{
        
        if(e.keyCode===13){
           
            this.props.addTodo(e.target.value);
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
          
        })
    }
    render() {
        return (
            <div>
                <label htmlFor="inp">TodoList</label>
                <input name="n"  onChange={this.handleChange} placeholder={this.state.n} onKeyDown={(e)=>this.handleInput(e)} type="text"/>
               
            </div>
        )
    }

}
