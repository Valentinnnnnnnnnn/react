import TaskForm from '../components/ui/Forms/TaskForm'
import { useTasks } from '../hooks/useTasks'
import { useNavigate } from 'react-router'
import { Priority } from '../types/priorityType'
import { TaskProps } from '../types/taskType'
import { FormSkeleton } from '../components/ui/Skeletons'
import ErrorMessage from '../components/ui/Cards/ErrorCard'

function CreateTask() {
  const { error, addTask, loading } = useTasks()
  const navigate = useNavigate()
  const task = {
    _id: '',
    title: '',
    description: '',
    completed: false,
    dueDate: undefined,
    priority: Priority.Low,
    createdAt: new Date(),
    updatedAt: new Date()
  }

  const handleCreateTask = async (taskData: TaskProps) => {
    await addTask(taskData)
  }

  if (loading) {
    return (
      <>
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center mt-10">
          Create Task
        </h1>
        <FormSkeleton />
      </>
    )
  }

  if (error) {
    return (
      <div className="m-4">
        <ErrorMessage 
          message={error}
          onRetry={() => navigate(0)}
          onDismiss={() => navigate('/tasks')}
        />
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center mt-10">
        Create Task
      </h1>
      <TaskForm initialData={task} onSubmit={handleCreateTask} isEdit={false} />
    </div>
  )
}

export default CreateTask
