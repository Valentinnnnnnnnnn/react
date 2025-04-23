import './App.css'
import { TaskProps, Priority } from './types/Task'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { useState } from "react"

function App() {
  const taskExemple : TaskProps = {
    dbId: '1',
    title: 'Task 1',
    description: 'This is a task',
    completed: false,
    dueDate: new Date(),
    priority: Priority.Low,
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  const tasks = [taskExemple, taskExemple, taskExemple, taskExemple, taskExemple, taskExemple]

  const [tasksList, setTasksList] = useState(tasks)

  return (
    <>
      <TaskList
        tasks={tasksList}
      />

      <TaskForm
        setTasksList={setTasksList}
      />
    </>
  )
}

export default App