import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    // your code here
    this.state = {
      result: 0,
      num1: "",
      num2: ""
    }
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.clear = this.clear.bind(this);
    this.preformOperation = this.preformOperation.bind(this);
  }

  setNum1(event) {
    this.setState({num1: event.currentTarget.value});
  }

  setNum2(event) {
    this.setState({num2: event.currentTarget.value});
  }

  clear() {
    this.setState({
      num1: "",
      num2: "",
      result: 0
    })
  }

  preformOperation(opp) {
    let x = parseInt(this.state.num1);
    let y = parseInt(this.state.num2);
    if (opp === '+') {
      return () => this.setState({result: x + y })
    } else if (opp === '-') {
      return () => this.setState({result: x - y })
    } else if (opp === '*') {
      return () => this.setState({result: x * y })
    } else if (opp === '/') {
      return () => this.setState({result: x / y })
    }
  }

  // your code here

  render() {
    return (
      <div>
        <h1>{this.state.result}</h1>
        <input onChange={this.setNum1} type="text" value={this.state.num1}/>
        <input onChange={this.setNum2} type="text" value={this.state.num2}/>
        <button onClick={this.clear}>Clear</button>
        <br />

        <button onClick={this.preformOperation('+')}>+</button>
        <button onClick={this.preformOperation('-')}>-</button>
        <button onClick={this.preformOperation('*')}>*</button>
        <button onClick={this.preformOperation('/')}>/</button>
      </div>
    );
  }
}

export default Calculator;
