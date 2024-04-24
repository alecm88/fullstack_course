
const Header = ({ header }) => {  return (    <h1>{header}</h1>  )}

const Part = ({ part }) => {  return (    <li>{part.name} {part.exercises}</li>  )}

const Course = ({ course }) => {
    const total = course.parts.reduce((partialSum, a)=> partialSum + a.exercises, 0);

    return (
    <div>
        <Header header={course.name} />
        <ul>
            {course.parts.map(part => <Part key={part.id} part={part} />)}
        </ul>
        <h3>Total of {total} exercises</h3>
    </div>
)}


export default Course