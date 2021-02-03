import { Button } from '@material-ui/core';
import React from 'react';
import './TodoList.css';

const TodoItem = ({ todo, removeTodo, index}) => {
  return (
    <div className="todo">
      {todo}
      <Button
        onClick={removeTodo}
        variant="contained"
        color="secondary"
      >
        Delete
      </Button>
    </div>
  );
};

export default TodoItem;