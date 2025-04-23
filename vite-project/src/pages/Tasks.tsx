import TaskList from '../components/layout/TaskList'
import { tasks } from '../components/loadTasks'
import Create from '../components/ui/Buttons/CreateButton'

function Tasks() {
  
  return (
    <>
      <Create />

      <TaskList
        tasks={tasks}
      />
    </>
  )
}

export default Tasks