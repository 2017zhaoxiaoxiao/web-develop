import React, { Component } from 'react'
import { labeledStatement } from '@babel/types';
let url ='https://api.apiopen.top/musicRankingsDetails?type=1';
function hoc(Com,url,title){
    class A extends Component{
        constructor(){
            super();
            this.state={
                data : []
            }
        }
        componentDidMount(){
            fetch(url)
            .then((res)=> {
                return res.json();
            }).then((res)=>{
            
            this.setState({
                data: res.result
             })
             console.log(res);
            })  
        }
        render(){
            return (
                <div>
                    <h1>{title}</h1>
                    <Com {...this.props} data={this.state.data}/>
                </div>
            )
        }
    }
    //A.displayName='A('+getDisplayName(Com)+')';
    A.displayName=`A(${getDisplayName(Com)}`;
    return A;
}
function getDisplayName(Com){
    return Com.displayName || Com.name || 'Component'; 
}
class Music extends Component{
    render(){
        return <ul>
            <div>{this.props.name}</div>
            {
                this.props.data.map((item,idx)=>{
                    return <li key={idx}>{item.title}</li>
                })
            }
            </ul>
    }
}
var Mymusic1 =hoc(Music,url,'第一个');
var Mymusic =hoc(Music,url,'第二个');
export default class Hoc extends Component {
    render() {
        return (
            <div>
                <Mymusic1 name='aa'/>
                <Mymusic/>
            </div>
        )
    }
}
