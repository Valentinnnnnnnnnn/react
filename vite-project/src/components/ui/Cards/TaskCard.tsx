import PriorityFrame from "../Frames/PriorityFrame"
import DueFrame from "../Frames/DueFrame"
import Complete from "../Buttons/CompleteButton"
import { TaskProps } from "../../../types/Task"
import Delete from "../Buttons/DeleteButton"
import Edit from "../Buttons/EditButton"

function Task(task: TaskProps) {
    return (
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
                    taskId={task.dbId}
                />
            </div>

            <div className="absolute bottom-0 left-0 p-4">
                <Edit 
                    taskId={task.dbId}
                />
            </div>

            <div className="absolute bottom-0 left-30 p-4">
                <Delete 
                    taskId={task.dbId}
                />
            </div>
        </div>
    )
}

export default Task