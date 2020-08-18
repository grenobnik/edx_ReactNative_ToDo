import React from "react";
import { render } from "react-dom";
import "./styles.css";

let id = 0;

const Todo = (props) => (
  <li>
    <input type="checkbox" />
    <button onClick={props.onDelete}>delete</button>
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
      todos: [...this.state.todos, { id: id++, text: text }]
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    });
  }

  render() {
    return (
      <div className="App">
        <h1> TODO App </h1>
        <button onClick={() => this.addTodo()}>Add TODO</button>
        <ul>
          {this.state.todos.map((todo) => (
            <Todo onDelete={() => this.removeTodo(todo.id)} todo={todo} />
          ))}
        </ul>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
