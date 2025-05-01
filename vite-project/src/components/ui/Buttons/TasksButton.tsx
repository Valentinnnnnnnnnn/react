import { Link } from 'react-router'

function TasksButton() {
  return (
    <Link to="/tasks">
      <button className="bg-amber-100 hover:bg-amber-200 text-black font-semibold py-3 px-6 rounded-2xl w-40">
        Tasks
      </button>
    </Link>
  )
}

export default TasksButton
