import React, { PureComponent } from 'react';

class Habit extends PureComponent {
    
    // 컴포넌트가 시작되기 이전에 호출함
    componentDidMount(){
        console.log(`habit : ${this.props.habit.name} mounted`);
    }

    // 컴포넌트를 지우기 전에 호출함
    componentWillUnmount(){
        console.log(`habit : ${this.props.habit.name} will mount`);
    }

    
    handleIncrement =  () =>{
       this.props.onIncrement(this.props.habit);
    //   2. props를 이용해서 On함수의 인자값으로 props.habit을 전달해준다.
    //      왜 그런지 헷갈린다면 habits에서 모든 세팅을 해주니 얘는 그냥 prop로
    //      값만 전달받으면 된다
    };
    handleDecrement =  () =>{
        this.props.onDecrement(this.props.habit);
    };
    handleDelete = () =>{
        this.props.onDelete(this.props.habit);
    };
    render() {
        const {name, count} = this.props.habit;
        return(
            <li className="habit">
            <span className="habit-name">{name}</span>
            <span className="habit-count">{count}</span>

            <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                <i className="fas fa-plus-square"></i> 
            </button>
            <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                <i className="fas fa-minus-square"></i> 
            </button>
            <button className="habit-button habit-delete" onClick={this.handleDelete}>
                <i className="fas fa-trash"></i> 
            </button>
            </li>
        )
    }
}

export default Habit;