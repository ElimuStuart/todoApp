import React from "react";

function TodoItem() {

  const style = {
    fontWeight: 'bold'
  }
  return (
    <div style={style}>
      <input type="checkbox" /> <label>Go to the store.</label> <br />
    </div>
  )

}

export default TodoItem;