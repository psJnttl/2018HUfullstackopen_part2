import React from 'react';
import axios from 'axios'
import Countries from './components/Countries'
import CountryFilter from './components/CountryFilter'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      constraint: ''
    }
  }

  handleConstraint = (event) => {
    const value = event.target.value;
    this.setState({constraint: value});
  }

  componentWillMount() {
    axios.get("https://restcountries.eu/rest/v2/all").then(
      (response) => {
        this.setState({countries: response.data});
      }
    );
  }

  render() {

    return (
      <div>
        <h2>Countries</h2>
        <CountryFilter
          constraint={this.state.constraint}
          handleConstraint={this.handleConstraint}
        />
        <Countries
          numbers={this.state.countries}
          constraint={this.state.constraint} />
      </div>
    )
  }
}

export default App
