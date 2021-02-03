import './App.css';
import TodoItem from './Components/TodoItem';
import ToDoForm from './Components/TodoForm';
import { useState } from 'react';
import { Grid } from '@material-ui/core';

const App = () => {
  const [todo, setTodo] = useState([]);

  const addTodo = (item) => {
    const list = [...todo, item];
    setTodo(list);
  };

  const removeTodo = (index) => {
    const list = [...todo];
    list.splice(index, 1);
    setTodo(list);
  };

  return (
    <div className="App">
      <h1>Todo app</h1>
      <Grid container justify='center'>
        <div className="todo-list">
          <ToDoForm addTodo={addTodo} />
          {todo.map((todo, index) => {
            return <TodoItem index={index} todo={todo} key={index} removeTodo={removeTodo} />
          })}
        </div>
      </Grid>
    </div>
  );
}

export default App;
