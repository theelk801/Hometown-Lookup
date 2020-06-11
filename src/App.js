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
      <div className="outer">
        <div className="container">
          <h2>Untitled Project: Hometown</h2>
          <div className="component summary">
            Goal 1: Learn about your hometown's history of discrimination as
            well as current issues
          </div>
          <div className="component summary">
            Goal 2: Unlearn the use of "growing up in a liberal or progressive
            town" as a defense against learning about racism and discrimination
            that impacted your upbringing
          </div>
          <div className="component summary">
            Goal 3: Learn relevant examples in your hometown to use when
            speaking with parents and family who struggle to connect with your
            experiences or examples
          </div>
          <div className="smaller">
            <div className="component summary">
              To test this prototype, select your home state, type in your town,
              and choose one of the example prompts. Click the link to search.
            </div>
            <div className="component summary">
              Please DM me for prompt edits and suggestions.
            </div>
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
