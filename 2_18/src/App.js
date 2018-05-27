import React from 'react';
import personService from './services/persons'
import Numbers from './components/Numbers'
import AddForm from './components/AddForm'
import NumberFilter from './components/NumberFilter'
import TheNote from './components/TheNote'
import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      constraint: '',
      note: '',
      noteStyle: ''
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
      personService.addOne(newPerson).then( (response) => {
        const personAdded = this.state.persons.concat(response);
        this.setState({persons: personAdded, newName: '', newNumber: '',
        note: "Henkilön " + newPerson.name + " lisäys onnistui", noteStyle: 'oknote'});
        setTimeout( () => { this.setState({note: null})}, 4577 );
      });
    }
    else {
      let result = window.confirm("Nimi on jo olemassa: " + dupeCheck.name +
            "\nVaihdetaanko puhelinnumero uuteen?" +
            "\n" + dupeCheck.number + " -> " + newPerson.number + " ?");
      if (result) {
        const numberOnly = {name: dupeCheck.name, number: newPerson.number};
        personService.replace(numberOnly, dupeCheck.id).then ( (response) => {
          const otherPersons = this.state.persons.filter((person) => person.id !== response.id);
          const allPersons = otherPersons.concat(response);
          this.setState({persons: allPersons, newName:'', newNumber: '',
                         note: "Henkilön " + dupeCheck.name + " uusi numero on " + newPerson.number,
                         noteStyle: 'oknote'});
          setTimeout( () => {this.setState({note: null})}, 4577);
        });
      }
    }
  }

  handleClick = () => {
    this.setState({newName: '', newNumber: ''});
  }

  handleNumberChange = (event) => {
    const value = event.target.value;
    this.setState({newNumber: value});
  }

  handleConstraint = (event) => {
    const value = event.target.value;
    this.setState({constraint: value});
  }

  removePerson = (id) => {
    const person = this.state.persons.find((p) => p.id === id);
    let result = window.confirm("Poista " + person.name + " ?")
    if (result) {
      personService.remove(id).then(response => {
        if (200 === response.status) {
          this.setState({note: "Henkilö " + person.name + "\npoistettu onnistuneesti.",
                         noteStyle: 'oknote'});
          setTimeout( ()=> { this.setState({note: null}) }, 4577);
        }
      }).catch(response => {
        this.setState({note: "Jokin meni pieleen!\nHenkilön " + person.name + " poisto palvelimelta epäonnistui." +
                             "\nPoistetaan listasta.",
                       noteStyle: 'failnote' })
        setTimeout( () => {this.setState({note: null})}, 7754);
      });
      const personsAfter = this.state.persons.filter((p) => p.id !== id);
      this.setState({persons: personsAfter});
    }
  }

  componentWillMount() {
    personService.fetchAll().then(
      (persons) => {
        this.setState({persons: persons});
      }
    );
  }

  render() {

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <TheNote
          note={this.state.note}
          style={this.state.noteStyle}
        />
        <AddForm
          nameValue={this.state.newName}
          handleNameChange={this.handleNameChange}
          numberValue={this.state.newNumber}
          handleNumberChange={this.handleNumberChange}
          handleSubmit={this.handleSubmit}
        />
        <h2>Numerot</h2>
        <NumberFilter
          constraint={this.state.constraint}
          handleConstraint={this.handleConstraint}
        />
        <Numbers
          numbers={this.state.persons}
          constraint={this.state.constraint}
          delPerson={this.removePerson}
        />
      </div>
    )
  }
}

export default App
