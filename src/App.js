import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "react-dropdown/style.css";
import Dropdown from "react-dropdown";

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];
const prompts = [
  "police racial profilng",
  "police brutality",
  "police excessive force",
  "police wrongful death",
  "housing discrimination",
  "school segregation",
  "budget",
  "representatives",
];
class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="component summary">
          To test this prototype, select your home state, type your town, and
          choose one of the example prompts. Click the link to search.
        </div>
        <div className="component summary">
          Prompts are just examples for right now
        </div>
        <div className="selector">
          <Dropdown
            className="dropdown"
            options={states}
            onChange={this.chooseState}
            value="Select a State"
          />
          <div className="component">
            Selected state: {this.state.selectedState}
          </div>
        </div>
        <div className="selector">
          <div className="component">Enter your town</div>
          <input onChange={this.chooseTown} type="text" />
          <div className="component">
            Selected town: {this.state.selectedTown}
          </div>
        </div>
        <div className="selector">
          <Dropdown
            className="dropdown"
            options={prompts}
            onChange={this.choosePrompt}
            value="Select a Prompt"
          />
          <div className="component">
            Selected prompt: {this.state.selectedPrompt}
          </div>
        </div>
        {this.renderChosen()}
      </div>
    );
  }
  chooseState = (x) => {
    this.setState({ selectedState: x.label }, () => console.log(this.state));
  };
  chooseTown = (x) => {
    this.setState({ selectedTown: x.target.value }, () =>
      console.log(this.state)
    );
  };
  choosePrompt = (x) => {
    this.setState({ selectedPrompt: x.label }, () => console.log(this.state));
  };
  renderChosen = () => {
    if (
      this.state.selectedPrompt &&
      this.state.selectedState &&
      this.state.selectedTown
    ) {
      return (
        <div className="selector">
          <div className="component">
            Preview search text: {this.state.selectedTown}{" "}
            {this.state.selectedState} {this.state.selectedPrompt}
          </div>
          <div className="component">
            <a href={this.makeURL()} target="_blank">
              click here
            </a>
          </div>
        </div>
      );
    }
  };
  makeURL = () =>
    `https://www.google.com/search?q=${this.state.selectedTown} ${this.state.selectedState} ${this.state.selectedPrompt}`;
}

export default App;
