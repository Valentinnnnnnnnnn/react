import { Link } from "react-router"

function TasksButton () {
    return (
        <Link to="/tasks">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Tasks
            </button>
        </Link>
    )
}

export default TasksButton