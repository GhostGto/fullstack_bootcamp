const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
    )
  }

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Gto'/>
      <Hello name='Tamo metiendo mano'/>
    </div>
  )
}
  // const now = new Date()
  // // console.log('Hello from FullStack Bootcamp')
  // const a = 10
  // const b = 20
  // console.log(now, a+b)

  // return (
  //   <div>
  //     <p>Hello world, it's {now.toString()}</p>
  //     <p>
  //       {a} plus {b} is {a + b}
  //     </p>
  //   </div>
  // )


export default App