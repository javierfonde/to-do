import React, { useState } from "react"

import { TextField, Button } from "@mui/material"

import './TaskInput.scss'

function TaskInput({ addTask }) {

    const [task, setTask] = useState("")

    const handleAddTask = (e) => {
        e.preventDefault()
        addTask(task)
        setTask("");// set de cero la nueva tarea
    }

    return (
        <>
            <div>
                <TextField
                    label="Nueva Tarea"
                    variant="filled"
                    className="input-adaptable"
                    style={{ backgroundColor: "#BDB9A9", borderRadius: "4px" }}
                    value={task}
                    onChange={event => setTask(event.target.value)}>
                </TextField>
            </div>
            <Button
                variant="contained"
                style={{ backgroundColor: "#1e2833", padding: '1rem', marginTop:"1rem", marginBottom:"1rem" }}
                onClick={handleAddTask}
                className="boton-agregar"
            >
                Agregar Tarea
            </Button>


        </>
    );
}
export default TaskInput;
