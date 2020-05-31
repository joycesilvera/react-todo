import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom"; //React-Router

import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
//import { v4 as uuidv4 } from "uuid";
import "./App.css";
import About from "./components/pages/About";
import axios from "axios";

class App extends Component {
  state = {
    //state is an object
    todos: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => this.setState({ todos: res.data }));
  }

  markComplete = (id) => {
    // console.log(id);
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed; //we do this to toggle orelse it will always remain true/false
        }
        return todo;
      }),
    });
  };

  //but after refresh we will get all items again
  delTodo = (id) => {
    //console.log(id);
    // this.setState({
    //   todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    // });

    //delete from API
    axios
      .delete("https://jsonplaceholder.typicode.com/todos/${id}")
      .then((res) =>
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        })
      );

    //     if (todo.id === id) {
    //       todo.completed = !todo.completed; //we do this to toggle orelse it will always remain true/false
    //     }
    //     return todo;
    //   }),
    // });
  };

  // Add Todo
  addTodo = (title) => {
    //console.log(title);
    // const newTodo = {
    //   id: 4,
    //   title,
    //   completed: false,
    // };
    // this.setState({
    //   todos: [...this.state.todos, newTodo],
    // });

    //after the POST request
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false,
      })
      .then((res) => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/" //by adding EXACT here we get only the ABOUT page
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
