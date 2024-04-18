import { useState } from 'react'

const StatisticLine = (props) => {
    return(
        <tr>
            <td>{props.text}: {props.value}</td>
        </tr>
    )
}
const Statistics = (props) => {
    const { good, bad, neutral } = props;
    const all = good + bad + neutral;
    const average = (good - bad) / all;
    const positive = good / all + ' %';
    if (all === 0) {
        return (
            <div>
                <h1>Statistics</h1>
                No feedback given.
            </div>
        )
    } else {
        return (
            <table>
                <tbody>
                <StatisticLine text="good" value={good}/>
                <StatisticLine text="neutral" value={neutral}/>
                <StatisticLine text="bad" value={bad}/>
                <StatisticLine text="Average" value={average}/>
                <StatisticLine text="Positive" value={positive}/>
                <StatisticLine text="All" value={all}/>
                </tbody>
            </table>
        )
    }
}

const Button = ({ handleClick, text }) => (  <button onClick={handleClick}>    {text}  </button>)

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => {
        const updatedGood = good + 1;
        setGood(updatedGood);
    }
    const handleNeutralClick = () => {
        const updatedNeutral = neutral + 1;
        setNeutral(updatedNeutral);
    }
    const handleBadClick = () => {
        const updatedBad = bad + 1;
        setBad(updatedBad);
    }

    return (
        <div>
            <h1>Give Feedback</h1>
            <Button handleClick={handleGoodClick} text='Good' />
            <Button handleClick={handleNeutralClick} text='Neutral' />
            <Button handleClick={handleBadClick} text='Bad' />

            <h1>Statistics</h1>
            <Statistics good={good} bad={bad} neutral={neutral} />
        </div>
    )
}

export default App