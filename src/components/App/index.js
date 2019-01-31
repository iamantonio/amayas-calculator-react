import React, { Component } from "react";
import InputField from "../Input";
import { Container } from "semantic-ui-react";
import TotalBox from "../TotalBox";
import AppButton from "../Button";
import AppHeader from "../Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: "0",
      num1: "0",
      num2: "0"
    };
  }

  onClick = name => event => {
    event.preventDefault();
    console.log(event.target);
    this.setState({ [name]: "" });
  };

  addMe = event => {
    event.preventDefault();
    console.log("The " + event.target.name + " was pressed!");
    let num1 = parseInt(this.state.num1);
    let num2 = parseInt(this.state.num2);
    this.setState({
      total: num1 + num2
    });
  };

  resetMe = event => {
    event.preventDefault();
    this.setState({
      num1: "0",
      num2: "0",
      total: "0"
    });
  };

  onChange = name => event => this.setState({ [name]: event.target.value });

  render() {
    return (
      <Container style={{ display: `grid` }}>
        <AppHeader title={`Amaya's Calculator`} />
        <InputField
          label={`Enter the first number :`}
          name={`num1`}
          numField={this.state.num1}
          clickField={this.onClick("num1")}
          inputChange={this.onChange("num1")}
        />
        <InputField
          label={`Enter the second number :`}
          name={`num2`}
          numField={this.state.num2}
          clickField={this.onClick("num2")}
          inputChange={this.onChange("num2")}
        />
        <AppButton
          buttonClick={this.addMe}
          name={`add button`}
          iconName={`add`}
          size={`huge`}
        />
        <AppButton
          name={`reset button`}
          displayName={`Reset`}
          size={`huge`}
          buttonClick={this.resetMe}
        />
        <TotalBox
          label={`The answer is: `}
          name={`total`}
          value={this.state.total}
        />
      </Container>
    );
  }
}

export default App;
