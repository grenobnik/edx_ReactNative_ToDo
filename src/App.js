import React from "react";
import { render } from "react-dom";
import "./styles.css";

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
        <ul></ul>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
