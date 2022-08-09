import "./App.css"
import { Container } from "./container.js/container"
import { Header } from "./header/header"
import { useState } from "react"


const App = () => {
  const [boardNumbers, setBoardNumbers] = useState([])

  function createNewBoard() {
    setBoardNumbers([...boardNumbers, boardNumbers.length + 1])
  }
  return (<div>
        <button onClick={createNewBoard}>New Board</button>
      
    <div className="App">
      

      {boardNumbers.map((number) => (
        <div key={number}>
          <Header />
          <Container />
        </div>
      ))}
    </div></div>
  )
}

export { App }
