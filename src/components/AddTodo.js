import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: "",
  };
  onSubmit = (e) => {
    e.preventDefault(); //to prevent by deafult submit of vanilla javascript
    this.props.addTodo(this.state.title); //for adding
    this.setState({ title: "" }); //to clear after adding
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo ..."
          style={{ flex: "10", padding: "5px" }}
          value={this.state.title} //can't add value prop without onChange
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: 1 }}
        />
      </form>
    );
  }
}

export default AddTodo;
