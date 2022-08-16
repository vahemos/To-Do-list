import "./App.css"
import { Container } from "./container.js/container"
import { Header } from "./title/title"
import { Wrapper } from "./wrapper/wrapper"

const App = () => {
  return (
    <div>
      <Header />
      <Wrapper />
      <div className="App">
        <Container />
        <Container />
      </div>
    </div>
  )
}

export { App }
