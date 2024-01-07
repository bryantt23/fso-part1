import { useState } from 'react'
function getRandomIndex(length, currentIndex) {

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * length);
  } while (randomIndex === currentIndex);

  return randomIndex;
}

const anecdotesArray = [
  { "quote": "If it hurts, do it more often.", "votes": 0 },
  { "quote": "Adding manpower to a late software project makes it later!", "votes": 1 },
  { "quote": "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.", "votes": 2 },
  { "quote": "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", "votes": 3 },
  { "quote": "Premature optimization is the root of all evil.", "votes": 4 },
  { "quote": "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.", "votes": 5 },
  { "quote": "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.", "votes": 6 },
  { "quote": "The only way to go fast, is to go well.", "votes": 7 }
]
const App = () => {

  const [anecdotes, setAnecdotes] = useState(anecdotesArray)
  const [selected, setSelected] = useState(0)

  const getNextAnecdote = () => {
    console.log(anecdotes)
    const nextIndex = getRandomIndex(anecdotes.length, selected)
    setSelected(nextIndex)
  }
  const voteOnAnecdote = () => {
    const anecdotesCopy = [...anecdotes]
    anecdotesCopy[selected].votes++;
    setAnecdotes(anecdotesCopy)
  }

  return (
    <div>
      <p>
        {anecdotes[selected].quote}
      </p>
      <p>has {anecdotes[selected].votes} votes</p>
      <p>
        <button onClick={voteOnAnecdote}>vote</button>
        <button onClick={getNextAnecdote}>next anecdote</button></p>
    </div>
  )
}

export default App