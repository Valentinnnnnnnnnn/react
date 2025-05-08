import Task from '../ui/Cards/TaskCard'
import { useState, useEffect } from 'react'
import { Filters } from '../../types/filtersType'
import { Priority } from '../../types/priorityType'
import { TaskProps } from '../../types/taskType'
import { useTodos } from '../../hooks/useTasks';

function TaskList({
  filters
}: {
  filters: Filters
}) {
  const { tasks, loading, error, deleteTodo, toggleTodoCompleted } = useTodos();
  const [filteredTasks, setFilteredTasks] = useState<TaskProps[]>(tasks)
  
  useEffect(() => {
    setFilteredTasks(
      tasks.filter((task) => {
        if (!filters.completed && task.completed) return false
        switch (task.priority) {
          case Priority.Low:
            return filters.low
          case Priority.Medium:
            return filters.medium
          case Priority.High:
            return filters.high
          default:
            return false
        }
      })
    )
  }, [tasks, filters])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-amber-50 p-4 rounded-2xl m-4">
      {filteredTasks.map((task) => (
        <Task key={task._id} {...task} />
      ))}
    </div>
  )
}

export default TaskList
