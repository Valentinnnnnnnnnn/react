import Task from "../ui/Task"
import { TaskProps } from "../../types/Task"

function TaskList({ tasks }: { tasks: TaskProps[] }) {
    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))] gap-4">
            {tasks.map((task) => (
                <Task key={task.dbId} {...task} />
            ))}
        </div>
    )
}

export default TaskList