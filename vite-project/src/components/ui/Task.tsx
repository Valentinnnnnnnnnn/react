import PriorityFrame from "./PriorityFrame"
import DueFrame from "./DueFrame"
import Complete from "./Complete"
import { TaskProps } from "../../types/Task"

function Task(task: TaskProps) {
    return (
        <>
            <div className="bg-white rounded-lg shadow-md p-6 relative">
                <div className="absolute top-0 right-0 p-4">
                    {task.dueDate && (
                        <DueFrame
                            due={task.dueDate}
                        />
                    )}
                </div>

                <div className="flex items-center">
                    <div className="mr-4">
                        <PriorityFrame 
                            priority={task.priority}
                        />
                    </div>
                    <h1 className="text-2xl font-bold mb-2">{task.title}</h1>
                </div>
                
                <p className="text-gray-700 mb-4">{task.description || "Aucune description"}</p>
                
                <div className="absolute bottom-0 right-0 p-4">
                    <Complete 
                        completed={task.completed}
                    />
                </div>
            </div>
        </>
    )
}

export default Task