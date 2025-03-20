import { useState } from "react"

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Title = (props) => {
  return (
    <div>
      <h2>
        {props.title}
      </h2>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.content}</p>
    </div>
  )
}


const Total = (props) => {
  return (
    <div>
      <p>Total number of exercises {props.total}</p>
    </div>
  )
}

const Buttom = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

const Stats = (props) => {
  return (
    <div>
      <h2>
        {props.stats}
      </h2>
    </div>
  )
}

const App = () => {
  const course ={
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React', 
        exercises: 10
      },
      {
        name: 'Using props to pass data', 
        exercises: 7
      },
      {
        name: 'State of a component', 
        exercises: 14
      },
    ]
  }

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
  
  const title = 'Give a Feedback'
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  // Add handle button
  const handleGood = () => {
    const updateGood = good + 1
    setGood(updateGood)
    setAll(updateGood + neutral + bad)
  }
  const handleNeutral = () => {
    const updateNeutral = neutral + 1
    setNeutral(updateNeutral)
    setAll(updateNeutral + good + bad)
  }
  const handleBad = () => {
    const updateBad = bad + 1
    setBad(updateBad)
    setAll(updateBad + good + neutral)
  }

  // Add Statistics
  const stats = 'Statistics'

  const setZero = () => {setGood(0), setNeutral(0), setBad(0), setAll(0), average, positive}
  const average = all ? ((good - bad) / all).toFixed(2) : 0;
  const positive = all ? ((good / all) * 100).toFixed(2) : 0;

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  // Function to select a random anecdote
  const nextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  // Function to vote for the current anecdote
  const voteAnecdote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  // Find the anecdote with the highest votes
  const maxVotes = Math.max(...votes);
  const bestAnecdoteIndex = votes.indexOf(maxVotes);

  return (
    <div>
      <Header course={course.name} />
      <Content content={course.parts[0].name + ' ' + course.parts[0].exercises} />
      <Content content={course.parts[1].name + ' ' + course.parts[1].exercises} />
      <Content content={course.parts[2].name + ' ' + course.parts[2].exercises} />
      <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
      <br />
      <Title title={title} />
      <Buttom onClick={handleGood} text='Good' />
      <Buttom onClick={handleNeutral} text='Netrual' />
      <Buttom onClick={handleBad} text='Bad' />
      <br />
      <Stats stats={stats} />
      <button onClick={setZero}>Restart counter</button>
      <table>
        <tbody>
          <tr>
            <td>Good: </td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>Neutral: </td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>Bad: </td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>All: </td>
            <td>{all}</td>
          </tr>
          <tr>
            <td>Average: </td>
            <td>{average}</td>
          </tr>
          <tr>
            <td>Positive: </td>
            <td>{positive}%</td>
          </tr>
        </tbody>
      </table>
      <br />
      <p>{anecdotes[selected]}</p>
      <button onClick={voteAnecdote}>votes</button>
      <Buttom onClick={nextAnecdote} text='Next anecdote' />
      <p>{bestAnecdoteIndex}</p>
    </div>
  )
}

export default App