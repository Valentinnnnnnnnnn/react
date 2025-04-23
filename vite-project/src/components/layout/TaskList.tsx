import Task from "../ui/Cards/TaskCard"
import { TaskProps } from "../../types/Task"

function TaskList({ tasks }: { tasks: TaskProps[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-amber-50 p-4 rounded-2xl m-4">
            {tasks.map((task) => (
                <Task key={task.dbId} {...task} />
            ))}
        </div>
    )
}

export default TaskList