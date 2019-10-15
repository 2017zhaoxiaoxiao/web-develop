import React,{Component,Fragment} from 'react';
//2、类定义组件
//还可以直接导入如：export default class ShowTime extends.....
class ShowTime extends Component{

    constructor(){
        super();
        this.state={
            time:new Date().toLocaleString()
        }
        //第一种this的绑定，bind 绑定 this
        this.handleClick=this.handleClick.bind(this);
         console.log('constructor');
    }
    componentDidMount(){
        console.log('componentDidMount');
        setTimeout(()=>{
            this.setState({
                time:new Date().toLocaleString()
            })
        },1000);
    }
   
    shouldComponentUpdate(){
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log('getsnapshot');
    }
    componentDidUpdate(){
        console.log('didupdate');
    }
    //事件处理函数绑定 this ：箭头函数
    handleClick=(num,e)=>{
        console.log(num,e);
        console.log('点击成功');
    }
    divClick(num,e){
        console.log(num,e);
    }
    render(){
        console.log('render');
        return (
            <Fragment >
                <div onClick={(ev)=>this.handleClick(1,ev)}>{this.state.time}</div>
                <div onClick={this.divClick.bind(this,333)}>hello{this.props.word}</div>
            </Fragment>
        )
    }
}
//默认导出,只能导出一次
export default ShowTime;
//命名导出(一次性导出多个)
//export {ShowTime};
//export {ShowTime};
//export {ShowTime};