// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
const Header = (props) => {
  // const course = 'Half Stack application development'
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  // const namePart = 'Fundamentals of React'
  // const numberExercises = 10
  return (
    <div>
      <Part />
      <p>{props.content}</p>
    </div>
  )
}

// const Part = () => {
//   const content = [
//     {name: 'Fundamentals of React', exercises: 10},
//     {name: 'Using props to pass data', exercises: 7},
//     {name: 'State of a component', exercises: 14},
//   ]
//   return (
//     <div>
//       <p>{content[0].name} {content[0].exercises}</p>
//       <p>{content[1].name} {content[1].exercises}</p>
//       <p>{content[2].name} {content[2].exercises}</p>
//     </div>
//   )
// }

const Total = (props) => {
  // const totalNumberExercises = 14
  return (
    <div>
      <p>{props.total}</p>
    </div>
  )
}

const Part = () => {
  const course = 'Half Stack application development'
  const content = [
    {name: 'Fundamentals of React', exercises: 10},
    {name: 'Using props to pass data', exercises: 7},
    {name: 'State of a component', exercises: 14},
  ] 
  // const exercises = 7
  // const total = 14
  //const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <p>{content[0].name} {content[0].exercises}</p>
      <p>{content[1].name} {content[1].exercises}</p>
      <p>{content[2].name} {content[2].exercises}</p>
      <p>{content[0].exercises + content[1].exercises + content[2].exercises}</p>
    </div>
  )
}

export default Content