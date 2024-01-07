import { useState } from 'react'

const Statistics = ({ good, bad, neutral }) => {

  return <div>
    <h1>statistics</h1>
    {(good === 0 && bad === 0 && neutral === 0) ?
      <p> No feedback given</p>
      : (
        <div>
          <p>good {`${good}`}</p>
          <p>neutral {`${neutral}`}</p>
          <p>bad {`${bad}`}</p>
          <p>all {`${good + neutral + bad}`}</p>
          <p>average {`${(good - bad) / (good + neutral + bad)}`}</p>
          <p>positive {`${(good) / (good + neutral + bad) * 100}`}%</p>
        </div>)
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