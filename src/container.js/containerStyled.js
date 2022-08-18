import styled from "styled-components"

const ContainerStyled = styled.div`
  display: flex;
  text-align: center;
  margin: 0px auto;
  width: 70%;
`

const List = styled.div`
  background: aqua;
  width: 50%;
`
const StaticInput = styled.input`
  border: hidden;
  outline: none;
`
const ListItemInput = styled(StaticInput)``

export { StaticInput, ListItemInput, List, ContainerStyled }
