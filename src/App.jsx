import { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import axios from 'axios'

const App = () => {

  const [persons, setPersons] = useState([
  ])
  const [nameSearch, setNameSearch] = useState('')
  useEffect(() => {
    async function fetch() {
      const res = await axios.get("http://localhost:3001/persons")
      console.log("🚀 ~ fetch ~ res:", res)
      setPersons(res.data)
    }
    fetch()
  }, [])
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