import TaskList from '../components/layout/TaskList'
import { tasks } from '../components/loadTasks'

function Tasks() {
  
  return (
    <>
      <TaskList
        tasks={tasks}
      />
    </>
  )
}

export default Tasks