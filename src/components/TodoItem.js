import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, completeTodo } from "../redux/actions";

import { IconButton } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Paper } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

const TodoItem = ({ todoId, todo, completed }) => {
  const dispatch = useDispatch();
  const handleDelete = (event) => {
    event.preventDefault();
    dispatch(deleteTodo(todoId));
  };
  const handleComplete = (event) => {
    event.preventDefault();
    dispatch(completeTodo(todoId));
  };
  return (
    <div>
      <Paper className="todoitem__container" elevation={3}>
        {completed === true ? (
          <IconButton
            onClick={(event) => handleComplete(event)}
            color="secondary"
            aria-label="completetodo"
          >
            <CheckCircleIcon />
          </IconButton>
        ) : (
          <IconButton
            onClick={(event) => handleComplete(event)}
            color="secondary"
            aria-label="unchecktodo"
          >
            <RadioButtonUncheckedIcon />
          </IconButton>
        )}

        <Typography variant="body1" style={{ flex: "1" }}>
          {todo}
        </Typography>
        <IconButton
          onClick={(event) => handleDelete(event)}
          color="secondary"
          aria-label="delettodo"
        >
          <DeleteOutlineIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default TodoItem;
