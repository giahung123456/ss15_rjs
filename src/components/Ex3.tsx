import React, { Component } from "react";

interface State {
  birth: string;      
  submitted: string;  
}

export default class Ex3 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      birth: "",
      submitted: ""
    };
  }

  // Nếu không import riêng ChangeEvent thì phải viết React.ChangeEvent
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ birth: e.target.value });
  };

  // Nếu không import riêng FormEvent thì phải viết React.FormEvent
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ submitted: this.state.birth });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Ngày sinh: 
          <input 
            type="date" 
            value={this.state.birth} 
            onChange={this.handleChange} 
          />
        </label>
        <br />
        <button type="submit">Submit</button>

        {this.state.submitted && (
          <p>Ngày sinh: {this.state.submitted}</p>
        )}
      </form>
    );
  }
}
