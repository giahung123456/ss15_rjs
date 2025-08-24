import React, { Component} from "react";

interface State {
  progress: number;      
  submitted: number | null; 
}

export default class Ex4 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      progress: 0,
      submitted: null,
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ progress: Number(e.target.value) });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({ submitted: this.state.progress });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Tiến độ hoàn thành:{" "}
            {this.state.submitted !== null ? `${this.state.submitted} %` : "%"}
          </label>
          <br />
          <input
            type="range"
            min="0"
            max="100"
            value={this.state.progress}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
