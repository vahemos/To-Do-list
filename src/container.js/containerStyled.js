import styled from "styled-components"

const List = styled.div`
  background: aqua;
  width: 50%;
`
const StaticInput = styled.input`
  border: hidden;
  outline: none;
`
const ListItemInput = styled(StaticInput)``

export { StaticInput, ListItemInput, List }
