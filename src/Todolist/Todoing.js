import React, { Component } from 'react'

export default class Todoing extends Component {

    
    render() {
        return (
            <div>
                <h1>正在进行{this.props.a}</h1>
                <ul className="list">
                {
                    this.props.todo.map((item,key)=>
                        <li key={key}>{item}
                        ---<button onClick={()=>this.props.delTodo(key)}>删除</button>
                        </li>
                    )

                }
                </ul>   
            </div>
        )
    }
}
