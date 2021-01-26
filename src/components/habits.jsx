import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

//habit컨테이너 컴포넌트
class Habits extends Component {
  
    handleIncrement =  habit =>{
        this.props.onIncrement(habit);
    };

    handleDecrement =  habit =>{
        this.props.onDecrement(habit);
    };

    handleDelete = habit =>{
        this.props.onDelete(habit);
     };

     handlAdd = name =>{
         this.props.onAdd(name);
     }
    render() {
        return ( 
            <>
             <HabitAddForm  onAdd={this.handlAdd}/>
              <ul>
                {this.props.habits.map(habit =>(
                    //배열을 이용해서 각각 연결시켜줌
                    // 고유의 키값이 필요해서 키도 연결
                    <Habit 
                    key={habit.id}
                    habit={habit}
                    // 1.  habit의 함수를 this를 사용해서 할당해준다
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}        
                    />
                ))}
            </ul> 
            <button className="haibt-reset" onClick={this.props.onReset}>Reset All</button> 
            </>
          
        );
    }
}

export default Habits;