import PriorityFrame from '../Frames/PriorityFrame'
import DueFrame from '../Frames/DueFrame'
import Complete from '../Buttons/CompleteButton'
import { TaskProps } from '../../../types/taskType'
import Delete from '../Buttons/DeleteButton'
import Edit from '../Buttons/EditButton'

function Task({task, onDelete, onToggleCompleted}: {task :TaskProps, onDelete: (id: string) => void, onToggleCompleted: (id: string) => void}) {
  return (
    <div className="relative flex flex-col bg-white rounded-2xl shadow-md p-6 h-60">
      {/* Header: Title & Checkbox */}
      <div className="flex items-center justify-between">
        <h2
          className={`flex-1 text-xl font-semibold text-gray-800 truncate ${task.completed ? 'line-through' : ''}`}
        >
          {task.title}
        </h2>
        <Complete completed={task.completed} taskId={task._id} onToggleCompeted={onToggleCompleted}/>
      </div>

      {/* Description */}
      <p className="mt-4 text-gray-700 flex-grow overflow-y-auto max-h-24">
        {task.description || 'Aucune description'}
      </p>

      {/* Footer: Due Date + Priority + Buttons */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex flex-col space-x-2 text-gray-400 text-sm">
          {task.dueDate ? (
            <DueFrame due={task.dueDate} isComplete={task.completed} />
          ) : (
            'Sans échéance'
          )}
          <PriorityFrame priority={task.priority} isComplete={task.completed} />
        </div>
        <div className="flex space-x-3">
          <Edit taskId={task._id} />
          <Delete taskId={task._id} onDelete={onDelete}/>
        </div>
      </div>
    </div>
  )
}

export default Task
