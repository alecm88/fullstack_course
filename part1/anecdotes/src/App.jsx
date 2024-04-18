import { useState } from 'react'

const Button = ({ handleClick, text }) => (  <button onClick={handleClick}>    {text}  </button>)
const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const Anecdote = ({anecdote, votes}) => {
    return (
        <div>
            {anecdote}
            <p>Has {votes} votes</p>
        </div>
    )
}
const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(0)
    const anecdoteVotes = new Array(anecdotes.length).fill(0);
    const [votes, setVotes] = useState(anecdoteVotes)
    const [mostVotes, setMostVotes] = useState(0)
    const [anecdoteWithMostVotes, setAnecdoteWithMostVotes] = useState(0)

    const handleVoteClick = () => {
        const newVote = [...votes];
        newVote[selected]++;
        setVotes(newVote);

        const checkVote = newVote[selected];
        if (checkVote > mostVotes) {
            setMostVotes(checkVote);
            setAnecdoteWithMostVotes(selected);
        }
        console.log(votes);
    }
    const handleRandomAnecdote = () => {
        const random = getRandomInt(anecdotes.length);
        console.log(random);
        setSelected(random);
    }

    return (
        <div>
            <div>
                <h1>Anecdote of the day</h1>
                <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
            </div>
            <Button handleClick={handleVoteClick} text='Vote' />
            <Button handleClick={handleRandomAnecdote} text='Random Anecdote' />
            <h1>Anecdote with most votes</h1>
            <Anecdote anecdote={anecdotes[anecdoteWithMostVotes]} votes={votes[anecdoteWithMostVotes]} />
        </div>
    )
}

export default App