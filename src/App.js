import React, { Component } from 'react'
import{BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Todolist from './Todolist/Todolist'
import Request from './Request';
import ShowTime from './showTime';
import Parent from './Context/Parent';
import {con}from './Context/Context';
import Hoc from './Hoc/Hoc';
import Portals from './Portal/Portals';
import ParentPortal from './Portal/ParentPortal';
import Sider from './Sider';
import {Button} from 'antd';
//antd使用
//下载安装antd框架：npm i antd
//在某个css里引入antd 的css：@import '~antd/dist/antd.css';
//在需要的组件里import相应的组件，然后使用
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Sider/>
                    <div style={{marginLeft:50,float:'left',border:'2px solid red'}}>
                        <Route exact path='/' component={Todolist}/>    
                        <Route path='/hoc' component={Hoc}/>
                        <Route path='/request' component={Request}/>
                    </div>
                    <Button type='primary'>primary</Button>
                </div>
            </Router>
        )
    }
}
