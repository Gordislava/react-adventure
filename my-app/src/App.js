import "./App.css";

import React from "react"

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // Эта привязка обязательна для работы `this` в колбэке.
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'Включено' : 'Выключено'}
//       </button>
//     );
//   }
// }

const data = {
  first: "Хочу творог",
  second: "Хочу креветку",
  third: "Хочу креветку в твороге",
}

class Checkbox extends React.Component {

  render() {
    return (
      <div>
        <input type="checkbox" name="" id="" />
        <span>{this.props.comment}</span>
      </div>
    )
  }
}

class Button extends React.Component {
  render() {
    return (
      <button>Пощипать двуножку</button>
    )
  }
}


function App() {
  return (
    <div className="base-container">
      <h1>Я - сорока</h1>
      <Checkbox comment={data.first} />
      <Checkbox comment="Хочу креветку" />
      <Checkbox comment={data.third} />
      <Button />
    </div>
  );
}

export default App;
