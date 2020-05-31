import React, { Component } from "react";
import Todoitem from "./Todoitem";
import PropTypes from "prop-types";

class Todos extends Component {
  //****SINCE WE ARE MOVING UP Todos -> App.js SO WE WILL BE SHIFTING THE BELOW METHOD****
  // markComplete = () => {
  //   console.log("Hello");
  // };

  render() {
    return this.props.todos.map((todo) => (
      <Todoitem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      /> //we need to add id here as each item should have
      //a unique key orelse it will cause an error
    ));
  }
}

//Proptypes
Todos.protoTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;
