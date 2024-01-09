
import { deletePerson } from './services/persons'

function Persons({ persons, nameSearch }) {
    const handleDelete = async (person) => {
        if (window.confirm(`Delete ${person.name}?`)) {
            await deletePerson(person.id)
        }
    }
    return <ul>
        {persons.filter(person => person.name.toLowerCase().includes(nameSearch)).map(person =>
            <li>{person.name} {person.number} <button onClick={() => handleDelete(person)}>Delete</button>
            </li>)}
    </ul>
}

export default Persons