import { Priority } from "../../../types/Task";

function PriorityFrame({priority}: {priority: string}) {
    return (
        <>
            <p className={
              priority === Priority.High ? "bg-red-600" :
              priority === Priority.Medium ? "bg-yellow-600" :
              "bg-green-600"
            }>
              {priority}
            </p>
        </>
    )
}

export default PriorityFrame