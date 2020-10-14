import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

import { Paper } from "@material-ui/core";
import { OutlinedInput } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { Button } from "@material-ui/core";

const TodoList = () => {
  const [newtodo, setNewTodo] = useState("");
  const ListOfTodo = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newtodo !== "") {
      const newTodoObj = {
        todo: newtodo,
        completed: false,
        id: Math.floor(Math.random() * 90000) + 10000,
      };
      dispatch(addTodo(newTodoObj));
      setNewTodo("");
    }
  };

  return (
    <div className="todolist__container">
      <Paper className="todo__input" elevation={3}>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">
            Enter To Do
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={newtodo}
            onChange={(e) => setNewTodo(e.target.value)}
            labelWidth={100}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleAddTodo();
            }}
          />
        </FormControl>
        <Button
          onClick={handleAddTodo}
          className="todo__add"
          variant="contained"
          color="secondary"
        >
          Add
        </Button>
      </Paper>
      {ListOfTodo.map((item, index) => (
        <TodoItem
          key={item.id}
          todoId={item.id}
          todo={item.todo}
          completed={item.completed}
        />
      ))}
    </div>
  );
};

export default TodoList;
