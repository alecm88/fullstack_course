import {useState} from "react";

const PersonFilter = ({setPersonSearch}) => {
    const handlePersonFilterChange = (event) => {
        setPersonSearch(event.target.value)
        setPerson(event.target.value)
    }
    const [person, setPerson] = useState('')
    return (
        <div>
            Filter:
            <input
                value={person}
                onChange={handlePersonFilterChange}
            />
        </div>
    )
}

export default PersonFilter