import { useState } from 'react'
import { TaskProps } from '../../../types/taskType'
import { Priority } from '../../../types/priorityType'
import Cancel from '../Buttons/CancelButton'
import Sumbit from '../Buttons/SubmitButton'
import { useTodos } from '../../../hooks/useTasks'

function TaskForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('low')
  const [duedate, setDuedate] = useState('')
  const [validation, setValidation] = useState(false)
  const { addTodo, error } = useTodos()

  const [isTitleValid, setIsTitleValid] = useState(true)

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const currentDate = new Date()
    const createdTask: TaskProps = {
      _id: '',
      title: title,
      description: description ? description : undefined,
      completed: false,
      dueDate: duedate ? new Date(duedate) : undefined,
      priority: priority as Priority,
      createdAt: currentDate,
      updatedAt: currentDate
    }

    addTodo(createdTask)

    // Show success message for 3 seconds
    setValidation(true)
    setTimeout(() => {
      setValidation(false)
    }
    , 3000)

    // Reset form fields
    setTitle('')
    setDescription('')
    setPriority('low')
    setDuedate('')
    setIsTitleValid(true)
  }

  const setTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const titleValue = e.target.value
    setTitle(titleValue)
    if (!title || titleValue.length < 1) {
      setIsTitleValid(false)
      return
    }
    setIsTitleValid(true)
  }

  return (
    <>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
          <strong className="font-bold">An error occurred!</strong>
          <br />
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      {validation && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
          <strong className="font-bold">Task added successfully!</strong>
        </div>
      )}
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
          {!isTitleValid && (
            <p className="text-red-500 text-sm mt-1">
              Title must be at least 1 characters long.
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Description (Optional)
          </label>
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
    </>
  )
}

export default TaskForm
