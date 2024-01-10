function Persons({ persons, nameSearch, handleDelete }) {
    return <ul>
        {persons.filter(person => person.name.toLowerCase().includes(nameSearch)).map(person =>
            <li key={person.id}>{person.name} {person.number} <button onClick={() => handleDelete(person)}>Delete</button>
            </li>)}
    </ul>
}

export default Persons