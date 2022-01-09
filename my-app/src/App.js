import "./App.css";

import React from "react"
import { Navbar } from "./components/Navbar";
import { TodoRows } from "./components/TodoRows";



// const data = {
//   first: "Хочу творог",
//   second: "Хочу креветку",
//   third: "Хочу креветку в твороге",
// }

// class Checkbox extends React.Component {

//   render() {
//     return (
//       <div>
//         <input type="checkbox" name="" id="" />
//         <span>{this.props.comment}</span>
//       </div>
//     )
//   }
// }

// class Button extends React.Component {
//   render() {
//     return (
//       <button>Пощипать двуножку</button>
//     )
//   }
// }


// function App() {
//   return (
//     <div className="base-container">
//       <h1>Я - сорока</h1>
//       <Checkbox comment={data.first} />
//       <Checkbox comment="Хочу креветку" />
//       <Checkbox comment={data.third} />
//       <Button />
//     </div>
//   );
// }

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: 'Name1',
      todoItems: [
        { action: 'action1', done: false },
        { action: 'action2', done: false },
        { action: 'action3', done: false },
      ],
      newTodo: "",
    };
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
        {action: this.state.newTodo, done: false},
      ],
    });
  }

    todoRows = () =>
    this.state.todoItems.map((item) => (
      <TodoRows  key={item.action} item={item} callback={this.toggleDone} />
    ));

    toggleDone = (todo) =>
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done} : item
      ),
    })
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

