import React from "react";

function TodoItem(props) {

  const style = {
    fontWeight: 'bold'
  }

  return (
    <div style={style}>
      <input type="checkbox" onChange={() => props.handleChange(props.item.id)} checked={props.item.completed}/> <label>{props.item.text}</label> <br />
    </div>
  )

}

export default TodoItem;