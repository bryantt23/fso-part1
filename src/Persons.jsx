
function Persons({ persons, nameSearch }) {
    return <ul>
        {persons.filter(person => person.name.toLowerCase().includes(nameSearch)).map(person => <li>{person.name} {person.number}</li>)}
    </ul>
}

export default Persons