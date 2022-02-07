import React, {Component, cOMPONENT} from "react";
import ReactDOM from "react-dom";

import Header from "../Header/Header";
import Search from "../Search/Search";
import TodoList from "../TodoList/TodoList";
import Filter from "../Filter/Filter";

export default class App extends Component {


  state = {
    todoData:  [
      { label: "Drink", important: false, id: 1 },
      { label: "Drank", important: true, id: 2 },
      { label: "Drunk", important: false, id: 3 },
    ]
  };

  deleteItem = (id) => {
    this.setState(({todoData}) => {
        const idx = todoData.findIndex((el) => el.id == id);
        todoData.filter((item, i) => {
          return item[i] !== idx;
        })
        
        return {
          todoData: todoData
        }
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Search />
        <Filter />
        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
      </div>
    );
  }
};


