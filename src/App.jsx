import { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import { getAll, create, deletePerson } from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([
  ])
  const [nameSearch, setNameSearch] = useState('')
  async function fetchPersons() {
    const res = await getAll()
    setPersons(res.data)
  }
  useEffect(() => {
    fetchPersons()
  }, [])
  const handleSubmit = async (name, number) => {
    if (persons.some(person => person.name === name)) {
      alert(`${name} is already added to phonebook`)
      return
    }
    await create({ name, number })
    await fetchPersons()
  }
  const handleDelete = async (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      await deletePerson(person.id)
      await fetchPersons()
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameSearch={nameSearch} setNameSearch={setNameSearch} />
      <h2>add a new</h2>
      <PersonForm handleSubmit={handleSubmit} />

      <h2>Numbers</h2>
      <Persons persons={persons} nameSearch={nameSearch} handleDelete={handleDelete} />
    </div>
  )
}

export default App