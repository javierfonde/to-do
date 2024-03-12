import "./styles/App.css";
import { useState } from 'react';
import { Typography } from '@mui/material';
import TaskInput from './components/TaskInput';
import ListShow from "./components/ListShow";


function App() {
  //Tarea a agregar, lista de tareas y contador.
  const [task, setTask] = useState("")
  const [taskList, setTaskList] = useState([])
  const [cont, setCont] = useState(0)


  //Funcion para agregar tarea. Chequeo que no este vacio, ni halla espacios vacios.
  const addTask = () => {
    if (task.trim() !== "") {
      setTaskList([...taskList, { text: task, completed: false }]); //Tomo la lista y paso la misma lista agregando la nueva tarea
      setTask("");// set de cero la nueva tarea
      setCont(cont + 1); //incremento el contador en 1
    };
  }

  //Funcion para actulizar la tarea en lista y el contador.
  const ToDone = (index) => {
    const updatedTasks = [...taskList];
    const taskCompleted = updatedTasks[index].completed; //veo el estado en el que estaba, para cambiar el contador despues.
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTaskList(updatedTasks);
    if (taskCompleted) {
      setCont(cont + 1);
    } else {
      setCont(cont - 1)
    }
  };


  return (
    <><div className="App">
      <Typography variant="h1" style={{ color: '#fbc827', fontFamily: 'TimesNewRoman' }}>Mis Tareas</Typography>

      <TaskInput task={task} setTask={setTask} addTask={addTask} />

      <Typography variant="h4" style={{ color: 'white', fontFamily: 'TimesNewRoman' }}>Quedan {cont} tareas pendientes</Typography>

      <ListShow taskList={taskList} ToDone={ToDone}></ListShow>

    </div></>
    
  );
}

export default App;
