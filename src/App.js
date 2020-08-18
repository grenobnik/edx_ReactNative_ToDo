import React from "react";
import { render } from "react-dom";
import "./styles.css";

const Todo = (props) => (
  <li>
    <input type="checkbox" />
    <button>delete</button>
    <span>{props.todo.text}</span>
  </li>
);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  addTodo() {
    const text = prompt("TODO text goes here");
    this.setState({
      todos: [...this.state.todos, { text: text }]
    });
  }

  render() {
    return (
      <div className="App">
        <h1> TODO App </h1>
        <button onClick={() => this.addTodo()}>Add TODO</button>
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
