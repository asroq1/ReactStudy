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

  const habits = this.state.habits.map(item =>{
    if(item.id === habit.id){
      return {...habit, count : habit.count + 1};
    }else{
      return item;
    }
  });
  this.setState({habits : habits});

};
handleDecrement =  habit =>{
  const habits = this.state.habits.map(item =>{
    if(item.id === habit.id){
      const count = habit.count - 1;
      return {...habit, count : count < 0 ?  0 : count};
    }else{
      return item;
    }
  });
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
   if(habit.count !== 0){
     return {...habit, count : 0};
   }
   return habit
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
