import { Button, Grid, Input } from '@material-ui/core';
import React, { useRef } from 'react';


const ToDoForm = ({ addTodo }) => {
  const refInput = useRef(null);

  const handleSubmit = () => {
    const { current } = refInput;
    if (!current.value) return;
    addTodo(current.value);
    current.value = '';
  };

  return (
    <Grid container justify='center'>
      <Grid>
        <Input
          type="text"
          className="input"
          inputRef={refInput}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Add item
        </Button>
      </Grid>
    </Grid>
  );
}

export default ToDoForm;