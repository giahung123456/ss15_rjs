import React, { Component } from "react";

interface StateType {
  color: string;
  submittedColor: string;
}

export default class Ex2 extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      color: "#000000",       
      submittedColor: ""      
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      color: event.target.value
    });
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); 
    this.setState({
      submittedColor: this.state.color
    });
  };

  render() {
    return (
      <div>
        <h2>
          Color: {this.state.submittedColor}
        </h2>

        <form onSubmit={this.handleSubmit}>
          <label>Màu sắc</label>
          <input
            type="color"
            value={this.state.color}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>       
      </div>
    );
  }
}
