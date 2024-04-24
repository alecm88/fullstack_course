import {useEffect, useState} from 'react'
import PersonFilter from "./components/personFilter.jsx";
import PersonForm from "./components/personForm.jsx";
import Persons from "./components/persons.jsx";
import personService from './services/persons'
import Notification from "./components/notification.jsx";

const App = () => {
    const [persons, setPersons] = useState(null)
    const [personSearch, setPersonSearch] = useState('')
    const [notificationMessage, setNotificationMessage] = useState(null)
    const [notificationColor, setNotificationColor] = useState('green')

    const hook = () => {
        console.log('effect')
        personService
            .getAll()
            .then(response => {
                console.log('promise fulfilled')
                setPersons(response)
            })
    }

    useEffect(hook, [])

    // do not render anything if notes is still null
    if (!persons) {
        return null
    }

    const personsToShow = persons.filter(person => person.name.toLowerCase().includes(personSearch.toLowerCase()) )

    const addPerson = (nameToAdd) => {
        console.log('creating from app', nameToAdd);
        personService
            .create(nameToAdd)
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))

                setNotificationColor('green');
                setNotificationMessage(
                    `'${returnedPerson.name}' added with number ${returnedPerson.number}`
                )
                setTimeout(() => {
                    setNotificationMessage(null)
                }, 5000)
            })
    }
    const updatePerson = (personId, updatedPerson) => {
        personService
            .update(personId, updatedPerson)
            .then(returnedPerson => {
                setPersons(persons.map(p => p.id !== personId ? p : returnedPerson))

                setNotificationColor('green');
                setNotificationMessage(
                    `'${returnedPerson.name}' number updated to ${returnedPerson.number}`
                )
                setTimeout(() => {
                    setNotificationMessage(null)
                }, 5000)
            })
    }
    const deletePerson = (personId, personName) => {
        console.log('deleting peron', personId)
        if (window.confirm(`Are you sure you want to delete ${personName}`)) {
            personService
                .remove(personId, null)
                .then(response => {
                    console.log(response);
                    setPersons(persons.filter(p => p.id !== personId))

                    setNotificationColor('orange');
                    setNotificationMessage(
                        `'${response.name}' removed from server`
                    )
                    setTimeout(() => {
                        setNotificationMessage(null)
                    }, 5000)
                })
                .catch(error => {
                    console.log(error)
                    setNotificationColor('red');
                    setNotificationMessage(
                        `Information of ${personName} was already removed from server`
                    )
                    setTimeout(() => {
                        setNotificationMessage(null)
                    }, 5000)
                })
        }
    }

    return (
        <div>
            <h1>Phonebook</h1>
            <Notification message={notificationMessage} color={notificationColor} />
            <PersonFilter setPersonSearch={setPersonSearch}/>

            <h3>Add a new</h3>
            <PersonForm persons={persons} addPerson={(nameToAdd)=>addPerson(nameToAdd)} updatePerson={(personId, updatedPerson)=>updatePerson(personId, updatedPerson)} />

            <h3>Numbers</h3>
            <Persons persons={personsToShow} deletePerson={((personId, personName)=>deletePerson(personId, personName))} />
        </div>
    )
}

export default App