const Person = ({ person, deletePerson }) => {
    return (
        <li>
            {person.name}: {person.number}
            <button onClick={deletePerson}>Delete</button>
        </li>
    )
}
const Persons = ({ persons, deletePerson }) => {
    return (
        <ul>
            {persons.map(person => <Person key={person.id} person={person} deletePerson={()=>deletePerson(person.id, person.name)} />)}
        </ul>
    )
}


export default Persons