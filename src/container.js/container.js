import { StaticInput, ListItemInput, List } from "./containerStyled"
import { useState } from "react"

const Container = () => {
  const [listItem, setListItem] = useState([])

  const editItem = (e, index) => {
    listItem[index] = e.target.value
    if (e.target.value < 1) {
      listItem.splice(index, 1)
    }

    setListItem([...listItem])
  }

  const blurEfect = (e) => {
    if (e.key === "Enter") {
      e.target.blur()
    }
  }

  const addNewItem = (e) => {
    if (e.target.value.length > 0) {
      setListItem([...listItem, e.target.value])
      e.target.value = ""
    }
  }

  return (
    <List>
      <ol>
        {listItem.map((inputText, index) => {
          return (
            <li key={index}>
              <ListItemInput
                type="text"
                onChange={(e) => {
                  editItem(e, index)
                }}
                onKeyDown={(e) => blurEfect(e)}
                value={inputText}
                autoFocus
              />
            </li>
          )
        })}
        <li>
          <StaticInput onChange={addNewItem}></StaticInput>
        </li>
      </ol>
    </List>
  )
}

export { Container }
