import Task, { TaskProps } from "./Task"

function TaskList({ tasks }: { tasks: TaskProps[] }) {
    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))] gap-4">
            {tasks.map((task, index) => (
                <Task key={index} {...task} />
            ))}
        </div>
    )
}

export default TaskList