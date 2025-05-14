import { useParams } from 'react-router'
import { TaskProps } from '../types/taskType'
import { useTask } from '../hooks/useTask'
import { useNavigate } from 'react-router'
import TaskForm from '../components/ui/Forms/TaskForm'
import { FormSkeleton } from '../components/ui/Skeletons'
import ErrorMessage from '../components/ui/Cards/ErrorCard'

function Edit() {
  const { taskId } = useParams()
  const { task, error, loading, updateTask } = useTask(taskId)
  const navigate = useNavigate()

  const handleUpdateTask = async (taskData: TaskProps) => {
    await updateTask(taskData)
  }

  if (loading) {
    return (
      <>
        <h1 className="text-2xl font-bold text-gray-800 mb-4 w-full text-center mt-10">
          Edit Task
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

  if (!task) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded">
        <p>Task not found</p>
        <button
          onClick={() => navigate('/tasks')}
          className="mt-2 text-sm underline"
        >
          Back to tasks list
        </button>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-4 w-full text-center mt-10">
        Edit Task
      </h1>
      <TaskForm initialData={task} onSubmit={handleUpdateTask} isEdit />
    </div>
  )
}

export default Edit
