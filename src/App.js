import "./App.css"
import { Container } from "./container.js/container"
import { Header } from "./title/title"
import { ContainerStyled } from "./container.js/containerStyled"

const App = () => {
  return (
    <div>
      <Header />
      <ContainerStyled>
        <Container item="YES" />
        <Container item="NO" />
      </ContainerStyled>
    </div>
  )
}

export { App }
