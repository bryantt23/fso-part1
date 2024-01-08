import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: '', number: '' },
    { name: 'Arto Hellas', number: "562-123-4567" }
  ])
  const [newName, setNewName] = useState('')
  const [newTelephoneNumber, setTelephoneNumber] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons(persons => persons.concat({ name: newName, number: newTelephoneNumber }))
    setNewName("")
    setTelephoneNumber("")
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input type="text" value={newName} onChange={e => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input type="tel" value={newTelephoneNumber} onChange={e => setTelephoneNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li>{person.name} {person.number}</li>)}</ul>
    </div>
  )
}

export default App