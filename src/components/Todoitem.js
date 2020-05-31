import React, { Component } from "react";
import PropTypes from "prop-types";

export class Todoitem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
    // if (this.props.todo.completed) {
    //   return {
    //     textDecoration: "line-through",
    //   };
    // } else {
    //   return {
    //     textDecoration: "none",
    //   };
    // }
  };

  //****SINCE WE ARE MOVING UP Todoitem -> Todos -> App.js SO WE WILL BE SHIFTING THE BELOW METHOD****
  // markComplete = (e) => {
  //   //use arrow function to bind the this to the prop
  //   //our custom method that we have created
  //   console.log(this.props); //can cause error as it can't read props of undefined as the Component
  //   //properties can be invoked only within the render method
  // };

  render() {
    //variable destructuring
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
} //we receive the values from the state to the props and them we will be able to see it as a list
// using the above command

//Proptypes
Todoitem.protoTypes = {
  todo: PropTypes.object.isRequired,
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "2px 5px",
  borderRadius: "30%",
  cursor: "pointer",
  float: "right",
};
export default Todoitem;
