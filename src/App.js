import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Search from "./components/Search";
import employees from "./employees.json";

class App extends Component {

  state = {
    search: "",
    employees
  };

  handleInputChange = event => {
    console.log(event.target.value);
    this.setState({ search: event.target.value });
  };

  // Work on search function working. Occupation isn't listed so you are JUST searching by name alone.


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title></Title>
        <Search
          handleInputChange={this.handleInputChange}
          search={this.state.search}
        
        >
        </Search>
        {this.state.employees.map(employee => (
          <EmployeeCard
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            occupation={employee.occupation}
            contact={employee.contact}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

