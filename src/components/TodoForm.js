import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

  handleChanges = e => {
    this.setState({
      text: e.target.value
    });
  };

 
  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.text);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="item"
          value={this.state.text}
          onChange={this.handleChanges}
        />
        <button >Add</button>
      </form>
    );
  }
}

export default TodoForm;
