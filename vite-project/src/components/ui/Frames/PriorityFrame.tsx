import { Priority } from "../../../types/Task";

function PriorityFrame({priority, isComplete}: {priority: string, isComplete: boolean}) {
    return (
        <>
            <p className={
              isComplete ? "text-gray-500" :
              priority === Priority.High ? "text-red-600" :
              priority === Priority.Medium ? "text-yellow-600" :
              "text-green-600"
            }>
              Priority : {priority} 
            </p>
        </>
    )
}

export default PriorityFrame