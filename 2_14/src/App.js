import React from 'react';
import axios from 'axios'
import Numbers from './components/Numbers'
import AddForm from './components/AddForm'
import NumberFilter from './components/NumberFilter'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      dupeEntered: false,
      constraint: ''
    }
  }

  handleNameChange = (event) => {
    const value = event.target.value;
    this.setState({newName: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
      name: this.state.newName,
      number: this.state.newNumber
    }
    const dupeCheck = this.state.persons.find((person) => newPerson.name.toLowerCase() === person.name.toLowerCase());

    if (!dupeCheck) {
      axios.post("http://localhost:3001/persons", newPerson).then( (response) => {
        const personAdded = this.state.persons.concat(response.data);
        this.setState({persons: personAdded, newName: '', newNumber: '', dupeEntered: false});
      });
    }
    else {
      alert("Nimi on jo olemassa: " + newPerson.name);
      this.setState({dupeEntered: true});
    }
  }

  handleClick = () => {
    this.setState({newName: '', newNumber: '', dupeEntered: false});
  }

  handleNumberChange = (event) => {
    const value = event.target.value;
    this.setState({newNumber: value});
  }

  handleConstraint = (event) => {
    const value = event.target.value;
    this.setState({constraint: value});
  }

  componentWillMount() {
    axios.get("http://localhost:3001/persons").then(
      (response) => {
        this.setState({persons: response.data});
      }
    );
  }

  render() {
    const clearButton = this.state.dupeEntered ?
                        <button type="button" onClick={this.handleClick} >nollaa</button>:
                        null;
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <AddForm
          nameValue={this.state.newName}
          handleNameChange={this.handleNameChange}
          numberValue={this.state.newNumber}
          handleNumberChange={this.handleNumberChange}
          handleSubmit={this.handleSubmit}
          clearButton={clearButton}
        />
        <h2>Numerot</h2>
        <NumberFilter
          constraint={this.state.constraint}
          handleConstraint={this.handleConstraint}
        />
        <Numbers
          numbers={this.state.persons}
          constraint={this.state.constraint} />
      </div>
    )
  }
}

export default App
