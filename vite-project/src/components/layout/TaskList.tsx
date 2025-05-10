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

  const handleDeleteTask = async (id: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
      await deleteTodo(id)
    }
  }

  const handleToggleTaskCompleted = async (id: string) => {
    await toggleTodoCompleted(id)
  }

  const tasksBackground = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-amber-50 p-4 rounded-2xl m-4'

  if (loading) {
    return <div className={tasksBackground}>Loading...</div>
  }

  if (error) {
    return <div className={tasksBackground}>{error}</div>
  }

  if (filteredTasks.length === 0) {
    return <div className={tasksBackground}>No tasks found</div>
  }

  return (
    <div className={tasksBackground}>
      {filteredTasks.map((task) => (
        <Task 
          key={task._id}
          task={task}
          onDelete={handleDeleteTask}
          onToggleCompleted={handleToggleTaskCompleted}
        />
      ))}
    </div>
  )
}

export default TaskList
