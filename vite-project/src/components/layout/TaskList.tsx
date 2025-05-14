import Task from '../ui/Cards/TaskCard'
import { useState, useEffect } from 'react'
import { Filters } from '../../types/filtersType'
import { Priority } from '../../types/priorityType'
import { TaskProps } from '../../types/taskType'
import { useTasks } from '../../hooks/useTasks'
import { TaskListSkeleton } from '../ui/Skeletons'
import ErrorMessage from '../ui/Cards/ErrorCard'
import { useNavigate } from 'react-router'

function TaskList({ filters }: { filters: Filters }) {
  const { tasks, loading, error, deleteTask, toggleTaskCompletedOptimistic, fetchTasks } = useTasks()
  const [filteredTasks, setFilteredTasks] = useState<TaskProps[]>(tasks)
  const navigate = useNavigate()

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
      await deleteTask(id)
    }
  }

  const handleToggleTaskCompleted = async (id: string) => {
    await toggleTaskCompletedOptimistic(id)
  }

  const tasksBackground =
    'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-amber-50 p-4 rounded-2xl m-4'

  if (loading) {
    return <TaskListSkeleton background={tasksBackground} />
  }

  if (filteredTasks.length === 0 && !error) {
    return (
            <div className="m-4">
              <ErrorMessage 
                message='No tasks found' 
                onRetry={() => navigate(0)} 
              />
            </div>
            )
  }

  return (
    <div className=''>
      {error && (
            <div className="m-4">
              <ErrorMessage 
                message={error} 
                onRetry={fetchTasks} 
              />
            </div>
        )}
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
    </div>
  )
}

export default TaskList
