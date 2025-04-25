import TaskList from '../components/layout/TaskList'
import { tasks } from '../components/loadTasks'
import FiltersFrame from '../components/ui/Frames/FiltersFrame'

function Tasks() {
  return (
    <>
      <FiltersFrame />
      <TaskList
        tasks={tasks}
      />
    </>
  )
}

export default Tasks