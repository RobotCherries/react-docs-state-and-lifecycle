import React from "react";
import "./style.css";

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>

        <br />
        <br />
        <Clock />
      </div>
    );
  }
}

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>Hello, world!</h2>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

// Simple function version
export function FormattedDate(props) {
  return <p>It is {props.date.toLocaleTimeString()}.</p>;
}

// Complex class version
// export class FormattedDate extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       formattedDate: this.props.date.toLocaleTimeString()
//     };
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.update(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   update() {
//     this.setState({
//       formattedDate: this.props.date.toLocaleTimeString()
//     });
//   }

//   render() {
//     return <p>It is {this.state.formattedDate}.</p>;
//   }
// }
