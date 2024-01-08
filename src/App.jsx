import { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [nameSearch, setNameSearch] = useState('')

  const handleSubmit = (name, number) => {
    if (persons.some(person => person.name === name)) {
      alert(`${name} is already added to phonebook`)
      return
    }
    setPersons(persons => persons.concat({ name, number }))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameSearch={nameSearch} setNameSearch={setNameSearch} />
      <h2>add a new</h2>
      <PersonForm handleSubmit={handleSubmit} />

      <h2>Numbers</h2>
      <Persons persons={persons} nameSearch={nameSearch} />
    </div>
  )
}

export default App