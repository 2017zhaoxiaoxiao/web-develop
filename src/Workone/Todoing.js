import React, { Component } from 'react'

export default class Todoing extends Component {
   
    
    render() {
        return (
            <div>
                <h1>正在进行 {this.props.todo.length}</h1>
                <ul className="list1">
                {
                    this.props.todo.map((item,key)=>
                        <li key={item.name} >
                            <input onClick={()=>this.props.addTodone(item,key)} type="checkbox" name="todo" />{item.name}
                        ---<button onClick={()=>this.props.delTodo(key,item)}>删除</button>
                        </li>
                    )
                   

                }
                </ul>
                <h1>已经完成 {this.props.todone.length}</h1>
                <ul className="list2">
                {
                    this.props.todone.map((item,key)=>
                        <li key={item}><input onClick={()=>this.props.addTodo2(item,key)} type="checkbox" name="todone"  checked="checked"/>{item.name}
                        ---<button onClick={()=>this.props.delTodone(key,item)}>删除</button>
                        </li>
                    )

                }
                </ul>  

            </div>
        )
    }
}
