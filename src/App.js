import "./styles/App.css";
import { useState } from 'react';
import { Typography, useMediaQuery } from '@mui/material';
import TaskInput from './components/TaskInput';
import ListShow from "./components/ListShow";

import { ThemeProvider, createTheme } from '@mui/material/styles'; // tomas de material para modificar los colores

import './app.scss'

const theme = createTheme({
	palette: {
		primary: {
			light: '#757ce8',
			main: '#faebd7',
			dark: '#002884',
			contrastText: '#fff',
		},
		secondary: {
			light: '#ff7961',
			main: '#f44336',
			dark: '#ba000d',
			contrastText: '#000',
		},
	},
});

function App() {
	//Tarea a agregar, lista de tareas y contador.

	const [taskList, setTaskList] = useState([])
	const [cont, setCont] = useState(0)
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	//Funcion para agregar tarea. Chequeo que no este vacio, ni halla espacios vacios.
	const addTask = (task) => {
		if (task.trim() !== "") {
			setTaskList([...taskList, { text: task, completed: false }]); //Tomo la lista y paso la misma lista agregando la nueva tarea
			setCont(cont + 1); //incremento el contador en 1
		};
	}

	//Funcion para actulizar la tarea en lista y el contador.
	const ToDone = (index) => {
		const updatedTasks = [...taskList];
		const taskCompleted = updatedTasks[index].completed; //veo el estado en el que estaba, para cambiar el contador despues.
		updatedTasks[index].completed = !taskCompleted;
		setTaskList(updatedTasks);
		setCont(cont + (taskCompleted ? 1 : -1))
	};


	return (
		<div className="App">

			<ThemeProvider theme={theme}>

				<Typography variant="h1" style={{ color: '#fbc827', fontFamily: 'TimesNewRoman',  fontSize: isSmallScreen ? '4rem' : '6rem'}} className="titulo">Mis Tareas</Typography>

				<TaskInput addTask={addTask} />

				<Typography variant="h4" style={{ color: 'white', fontFamily: 'TimesNewRoman', fontSize: isSmallScreen ? '1.4rem' : '2.2rem' }}>Quedan {cont} tareas pendientes</Typography>

				<ListShow taskList={taskList} ToDone={ToDone}></ListShow>

			</ThemeProvider>

		</div>
	);
}

export default App;
