import React from 'react';
import Numbers from './components/Numbers'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-12340987' }
      ],
      newName: '',
      newNumber: '',
      dupeEntered: false
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
      const personAdded = this.state.persons.concat(newPerson);
      this.setState({persons: personAdded, newName: '', newNumber: '', dupeEntered: false});
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

  render() {
    const clearButton = this.state.dupeEntered ?
                        <button type="button" onClick={this.handleClick} >nollaa</button>:
                        null;
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            nimi: <input
              value={this.state.newName}
              onChange={this.handleNameChange} />
            {clearButton}
          </div>
          <div>numero:
            <input
              value={this.state.newNumber}
              onChange={this.handleNumberChange} />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <Numbers numbers={this.state.persons} />
      </div>
    )
  }
}

export default App
