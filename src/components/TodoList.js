// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Item from './Todo';

const TodoList = props => {
  
  return (
    <div className="todo-list">
      {props.toDo.map(item => (
        <Item key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-btn" onClick={props.clearDone}>
        Clear Done
      </button>
    </div>
  );
};

export default TodoList;