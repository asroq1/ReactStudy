import React, {Component} from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state={
    habits:[
        // 자식요소가 있다면 이렇게 id를 지정해줘야 한다.
        // id를 이용해서 성능개선을 하기에 필요
        {id : 1, name : 'Reading', count : 0},
        {id : 2, name : 'KReading', count : 0},
        {id : 3, name : 'Testing', count : 0},
    ], 
};
handleIncrement =  habit =>{
  // spread operator 사용 위의 배열 index를 새롭게 복사한다
  //껍데기만 달라지고 안의 내용물은 같다고 생각하면 편하다.
  const habits = [...this.state.habits];
  const index = habits.indexOf(habit);
  habits[index].count++;
  //이렇게 새로운 객체를 만들어서 반환한다.
  this.setState({habits : habits});

};
handleDecrement =  habit =>{
  const habits = [...this.state.habits];
  const index = habits.indexOf(habit);
  // count변수에 저장해서 마이너스를 방지한다.
  const count = habits[index].count - 1;
  habits[index].count = count < 0 ? 0: count;
  this.setState({habits : habits});
};

handleDelete = habit =>{
  // 배열의 filter를 이용해서 삭제함.
  const habits = this.state.habits.filter(item => item.id !== habit.id);
  this.setState({habits});
};
handleAdd = name =>{
  // spread operator
  const habits = [...this.state.habits, {id : Date.now(), name: name, count : 0}]
  this.setState({habits});
}
handleReset = ()=>{
  const habits = this.state.habits.map(habit =>{
    habit.count = 0;
    return habit;
  });
  this.setState({habits});
};
  render() {
    return (
    <>
    {/* navbar의 값을 새롭게 전달해준다. */}
    <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />
    <Habits  
    habits ={this.state.habits}
    onIncrement={this.handleIncrement}
    onDecrement={this.handleDecrement}
    onDelete={this.handleDelete}      
    onAdd={this.handleAdd}
    onReset={this.handleReset}
      />
    </>
    ); 
   
  }
}

export default App;
