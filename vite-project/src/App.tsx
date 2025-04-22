import './App.css'
import { Priority } from './components/Task'
import TaskList from './components/TaskList'

function App() {
  const taskExemple = {
    dbId: '1',
    title: 'Task 1',
    description: 'This is a task',
    completed: false,
    dueDate: new Date(),
    priority: Priority.Low,
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  return (
    <>
      <TaskList
        tasks={[taskExemple, taskExemple, taskExemple, taskExemple, taskExemple, taskExemple]}
      />
    </>
  )
}

export default App
