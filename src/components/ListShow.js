import React from "react";
import { List, ListItem, Checkbox, ListItemText } from "@mui/material";

function ListShow ({taskList, ToDone}){
    return (
        <>
        <List>
        {taskList.map((task, index) => (
          <ListItem 
            key={index}
           
          >
            <Checkbox
              checked={task.completed}
              onChange={() => ToDone(index)} 
              style={{ backgroundColor: "#BDB9A9" }}
            />
            <ListItemText 
              primary={task.text}
              style={{ textDecoration: task.completed ? 'line-through' : 'none', backgroundColor: "#BDB9A9",padding:"10px", marginInlineStart:"5px" }}
            />
          </ListItem>
        ))}
        </List>
        
        </>
    )
}

export default ListShow;