import React from "react";

function TodoItem(props) {

  const style = {
    fontWeight: 'bold'
  }

  const completedStyle = {
    fontSyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  }

  return (
    <div style={style}>
      <input type="checkbox" onChange={() => props.handleChange(props.item.id)} checked={props.item.completed}/> <label style={props.item.completed ? completedStyle : null}>{props.item.text}</label> <br />
    </div>
  )

}

export default TodoItem;