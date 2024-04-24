import {useState} from "react";

const PersonForm = ({addPerson, updatePerson, persons}) => {
    const addName = (event) => {
        event.preventDefault()
        const oldPerson = persons.find(person => person.name === newName);
        if (oldPerson) {
            if (oldPerson.number !== newNumber) {
                if (window.confirm(`${newName} is already added to phonebook, would you like to update the number?`)) {
                    const updatedPerson = {...oldPerson, number: newNumber}
                    updatePerson(oldPerson.id, updatedPerson)
                }
            } else
                alert (`${newName} is already added to phonebook`);
        } else {
            const nameToAdd = {
                name: newName,
                number: newNumber
            }
            console.log("adding person", nameToAdd)
            addPerson(nameToAdd)
        }
    }
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }
    return (
        <form onSubmit={addName}>
            <div>
                name:
                <input
                    value={newName}
                    onChange={handleNameChange}
                />
            </div>
            <div>number:
                <input
                    value={newNumber}
                    onChange={handleNumberChange}
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm