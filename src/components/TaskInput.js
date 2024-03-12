import React from "react"
import { TextField, Button } from "@mui/material"

function TaskInput ({task, setTask, addTask}){
    return (
    <><div style={{ padding: "10px" }}>
            <TextField
                label="Nueva Tarea"
                variant="filled"
                style={{ width: '500px', backgroundColor: "#BDB9A9", borderRadius: "4px" }}
                value={task}
                onChange={event => setTask(event.target.value)}>
            </TextField>
        </div>
        <Button
            variant="contained"
            style={{ backgroundColor: "#1e2833" }}
            onClick={addTask}
        >Agregar Tarea
        </Button>
    </>
    );
}
export default TaskInput;
