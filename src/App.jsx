import { useState } from 'react'
const StatisticLine = ({ text, value }) => <tr><td>{text} </td><td>{`${value}`}</td></tr>

const Statistics = ({ good, bad, neutral }) => {

  return <div>
    <h1>statistics</h1>
    {(good === 0 && bad === 0 && neutral === 0) ?
      <p> No feedback given</p>
      : (
        <table>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={good + neutral + bad} />
          <StatisticLine text="average" value={(good - bad) / (good + neutral + bad)} />
          <StatisticLine text="positive" value={`${(good) / (good + neutral + bad) * 100}%`} />
        </table>)
    }
  </div>
}

const Button = ({ text, cb }) => {
  return <button onClick={cb}> {text}</button>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" cb={() => setGood(good + 1)} />
      <Button text="neutral" cb={() => setNeutral(neutral + 1)} />
      <Button text="bad" cb={() => setBad(bad + 1)} />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App