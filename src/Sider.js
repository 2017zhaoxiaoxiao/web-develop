import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Sider extends Component {
    render() {
        return (
            <ul style={{float:'left'}}>
                <li> <Link to='/'>Todolist</Link><br/></li>
                <li> <Link to='/hoc'>Hoc</Link><br/></li>
                <li><Link to='/request'>Request</Link><br/></li>
            </ul>
        )
    }
}
