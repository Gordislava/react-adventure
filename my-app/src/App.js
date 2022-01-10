import "./App.css";

import React from "react"
import { Navbar } from "./components/Navbar";
import { TodoRows } from "./components/TodoRows";


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: 'Name1',
      todoItems: [

      ],
      newTodo: "",
    };
    this.deleteItem = this.deleteItem.bind(this);
  }

  

  updateValue = (event) => {
    this.setState({
      newTodo: event.target.value
    });
  };

  newTodo = () => {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        {action: this.state.newTodo, done: false, key: Date.now()},
      ],
    });
  }

    todoRows = () =>
    this.state.todoItems.map((item) => (
      <TodoRows  item={item} callback={this.toggleDone} delete={this.deleteItem} />
    ));

    toggleDone = (todo) => {
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
        item.key === todo.key ? { ...item, done: !item.done} : item
      ),
    })
  }


  deleteItem = (todo) => {
    const filtered = this.state.todoItems.filter((todo, i) => {
      console.log(todo.key)
      return this.state.todoItems[i].key !== todo.key;
    });
    this.setState({
      todoItems: filtered
    })

  }


  render = () => (
    <div className="base-container">
      <Navbar name={this.state.userName} />
      <div>
      {this.todoRows()}
      </div>
      <input 
      value={this.state.newTodo}
      onChange={this.updateValue}
      />
      <button
      onClick={this.newTodo}
      >Add task</button>
    </div>
  );
}

