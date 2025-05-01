import { useState } from "react"
import { TaskProps } from "../../../types/taskType"
import { Priority } from "../../../types/priorityType"
import Cancel from "../Buttons/CancelButton"
import Sumbit from "../Buttons/SubmitButton"

function TaskForm() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("low")
    const [duedate, setDuedate] = useState("")

    const [isTitleValid, setIsTitleValid] = useState(true)

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const currentDate = new Date()
        const createdTask: TaskProps = {
            dbId: "",
            title: title,
            description: description,
            completed: false,
            dueDate: duedate ? new Date(duedate) : undefined,
            priority: priority as Priority,
            createdAt: currentDate,
            updatedAt: currentDate
        }
        console.log(createdTask)
    }

    const setTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const titleValue = e.target.value
        setTitle(titleValue)
        if (!title || titleValue.length < 2) {
            setIsTitleValid(false)
            return
        }
        setIsTitleValid(true)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Title</label>
                <input 
                    className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    value={title}
                    onChange={setTitleHandler}
                    placeholder="Relire le cours"
                    required
                />
                {!isTitleValid && <p className="text-red-500 text-sm mt-1">Title must be at least 2 characters long.</p>}
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Description (Optional)</label>
                <input 
                    className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Slide 44 à 81"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Priority</label>
                <select
                    className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value as Priority)}
                    required
                >
                    {Object.values(Priority).map((prio) => (
                        <option key={prio} value={prio}>
                            {prio}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                    Due Date (Optional)
                </label>
                <input
                    type="date"
                    className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={duedate}
                    onChange={(e) => setDuedate(e.target.value)}
                />
            </div>

            <Sumbit />
            <Cancel />
        </form>
    )
}

export default TaskForm