import React from "react";
import { render } from "react-dom";
import "./styles.css";

const Todo = (props) => (
  <li>
    <input type="checkbox" />
    <button>delete</button>
    <span>{props.text}</span>
  </li>
);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  render() {
    return (
      <div className="App">
        <h1> TODO App </h1>
        <ul>
          {this.state.todos.map((todo) => (
            <Todo todo={todo} />
          ))}
        </ul>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
