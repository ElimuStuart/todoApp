import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

class App extends React.Component {

  constructor() {
    super();
    this.state = {

    }
  }

  render() {

    const todoItem = todosData.map(item => <TodoItem key={item.id} item={item} />)

    return (
      <div>
        {todoItem}
      </div>
    );
  }
}

export default App;
