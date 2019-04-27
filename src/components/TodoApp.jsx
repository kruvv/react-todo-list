import React from 'react';
import TodoList from './TodoList';

class TodoApp extends React.Component {

constructor(props) {
  super(props);
  this.state = { items: [], text: '' };
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
}

  render() {
    return (
      <div>
        <h3>Список дел</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">Что нужно сделать?</label><br />
          <input id="new-todo" onChange={this.handleChange} value={this.state.text}/>
          <button>Добавить #{this.state.items.length + 1}</button>
        </form>
        <TodoList items={this.state.items}></TodoList>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    if(!this.state.text.length) {
      return
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }
}

export default TodoApp;
