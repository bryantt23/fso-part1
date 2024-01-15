import { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import Notification from './Notification'
import { getAll, create, deletePerson, updatePerson } from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([
  ])
  const [notification, setNotification] = useState(null)
  const [nameSearch, setNameSearch] = useState('')
  useEffect(() => {
    fetchPersons()
  }, [])

  const fetchPersons = async () => {
    const res = await getAll()
    setPersons(res.data)
  }

  const sendNotification = (notification) => {
    setNotification(notification)
    setTimeout(() => { setNotification(null) }, 3000)
  }

  const handleSubmit = async (name, number) => {
    const matchingPerson = persons.find(person => person.name === name)
    if (matchingPerson) {
      if (window.confirm(`${name} is already added to phonebook, replace the old number with a new one?`)) {
        try {
          await updatePerson(matchingPerson._id, { name, number })
          sendNotification({ message: `Updated ${name}`, type: "success" })
        } catch (error) {
          sendNotification({ message: `Information of ${name} has already been removed from server`, type: "error" })
        }
        await fetchPersons()
      }
      return
    }
    try {
      await create({ name, number });
      sendNotification({ message: `Added ${name}`, type: "success" });
    } catch (error) {
      // Assuming the error response is in JSON format
      if (error.response && error.response.data) {
        // Extracting the error message from the server response
        const errorMessage = error.response.data.error || 'An unexpected error occurred';
        sendNotification({ message: errorMessage, type: "error" });
      } else {
        // Fallback error message if response data isn't available
        sendNotification({ message: 'An unexpected error occurred', type: "error" });
      }
    }
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
      <Notification notification={notification} />
      <Filter nameSearch={nameSearch} setNameSearch={setNameSearch} />
      <h2>add a new</h2>
      <PersonForm handleSubmit={handleSubmit} />

      <h2>Numbers</h2>
      <Persons persons={persons} nameSearch={nameSearch} handleDelete={handleDelete} />
    </div>
  )
}

export default App