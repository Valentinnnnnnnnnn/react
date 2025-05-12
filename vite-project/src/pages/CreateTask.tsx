import TaskForm from '../components/ui/Forms/TaskForm'
import { useTasks } from '../hooks/useTasks'
import { useNavigate } from 'react-router'
import { Priority } from '../types/priorityType'
import { TaskProps } from '../types/taskType'

function CreateTask() {
  const { error, addTask } = useTasks()
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

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
        <p>{error}</p>
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
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Create Task
      </h1>
      <TaskForm initialData={task} onSubmit={handleCreateTask} isEdit={false} />
    </div>
  )
}

export default CreateTask
