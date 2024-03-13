import React from "react";

import { List, ListItem, Checkbox, ListItemText } from "@mui/material";

import './ListShow.scss'

function ListShow({ taskList, ToDone }) {
  return (
    <List>
      {taskList.map((task, index) => (
        <ListItem
          key={index}
          onClick={() => ToDone(index)}
          className="list-item"
        >
          <Checkbox
            checked={task.completed}
            color="success"
          />
          <ListItemText
            primary={task.text}
            className="list-item-text"
            style={{ textDecoration: task.completed ? 'line-through' : 'none', wordWrap: 'break-word'}}
          />
        </ListItem>
      ))}
    </List>
  )
}

export default ListShow;