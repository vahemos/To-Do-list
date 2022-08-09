import { ListItesmStyle } from "./containerStyled"
import { useState } from "react"
import { ListItem } from "../listItem"

const Container = () => {
  const [listItemArray, setListItemArray] = useState([])

  const keyPress = (e) => {
    if (e.key === "Enter") {
      setListItemArray([...listItemArray, e.target.value])
      e.target.value = ""
    }
  }
  return (
    <div>
      <ol>
        {listItemArray.map((inputText, index) => {
          return (
            <ListItesmStyle key={index}>
            <ListItem  inputText={inputText}/>
              <button
                onClick={() => {
                  listItemArray.splice(index, 1)
                  setListItemArray([...listItemArray])
                }}
              >
                &#10008;
              </button>
            </ListItesmStyle>
          )
        })}
        <li>
          <input type="text" onKeyDown={keyPress} />
        </li>
      </ol>
    </div>
  )
}

export { Container }
