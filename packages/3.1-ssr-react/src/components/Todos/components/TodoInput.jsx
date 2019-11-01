import React from "react";

export default class TodoInput extends React.Component {
  state = {
    name: "",
    description: ""
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.name && this.state.description) {
      this.props.createTodo(this.state);
      this.setState({
        name: "",
        description: ""
      });
    }
  };

  render() {
    const { name, description } = this.state;
    return (
      <div className="Todo-input-container">
        <form className="Todo-input-form" onSubmit={this.onSubmit}>
          <input
            className="Todo-input-field"
            name="name"
            placeholder="Name"
            onChange={this.onInputChange}
            value={name}
          />
          <input
            className="Todo-input-field"
            name="description"
            placeholder="Description"
            onChange={this.onInputChange}
            value={description}
          />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}
