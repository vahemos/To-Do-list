import { useRef } from "react"

export const ListItem = ({ inputText }) => {
  const liRef = useRef()

  const textclicked = () => {
    liRef.current.contentEditable = "true"
    liRef.current.style.cursor = "text"
  }

  const editContentEditableValue = () => {
    liRef.current.contentEditable = "false"
    liRef.current.style.cursor = "pointer"
  }

  return (
    <li ref={liRef} onClick={textclicked} onBlur={editContentEditableValue}>
      {inputText}
    </li>
  )
}
