import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

const toDo = [

];

class App extends Component {
  // Constructor with state
  constructor() {
    super();
    // initialize the state object
    this.state = {
      toDoList: [],
      
    };

    // this.toggleItem = this.toggleItem.bind(this)
  }
  // Class methods to update state
  // arrow function implicity bind the "this" keyword to the function
  toggleItem = id => {
    
    const newTodoList = this.state.toDoList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          complete: !item.complete
        };
      } else {
        return item;
      }
    });
    // update groceryList
    this.setState({
      toDoList: newTodoList
    });
  };

  clearDone = () => {
    this.setState({
      toDoList: this.state.toDoList.filter(item => (item.complete !== true))
    })
  };
  

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      done: false
    };
    this.setState({
      toDoList: [...this.state.toDoList, newItem]
    });
  };

  // render - comparable to a function component's return
  // render is in charge of ... rendering JSX!
  render() {
    console.log('rendering...');
    // you can do any JS stuff above the return
    // const sortedList = this.state.groceryList.sort(
    //   (a, b) => a.purchased - b.purchased
    // );
    return (
      <div className="App">
        <div className="header">
          <h1>My List of Things To Do</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          toDo={this.state.toDoList}
          toggleItem={this.toggleItem}
          clearDone={this.clearDone}
        />
      </div>
    );
  }
}

export default App
export {toDo}