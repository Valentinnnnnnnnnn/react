import { useState, useEffect } from 'react'
import { TaskAPI } from '../services/api'
import { TaskProps } from '../types/taskType'
import { TaskFormType } from '../types/taskFormType'

export const useTask = (id?: string) => {
  const [task, setTask] = useState<TaskProps | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Charger un task par son ID
  useEffect(() => {
    if (!id) return

    const fetchTask = async () => {
      setLoading(true)
      setError(null)

      try {
        const data = await TaskAPI.getById(id)
        setTask(data)
      } catch (err) {
        console.error(`Error fetching task with id ${id}:`, err)
        setError(`Impossible de charger la tâche #${id}`)
      } finally {
        setLoading(false)
      }
    }

    fetchTask()
  }, [id])

  // Mettre à jour un task
  const updateTask = async (taskData: TaskFormType) => {
    if (!id) {
      setError('ID de la tâche manquant')
      throw new Error('Task ID is required')
    }

    setLoading(true)
    setError(null)

    try {
      const updatedTask = await TaskAPI.update(id, taskData)
      setTask(updatedTask)
      return updatedTask
    } catch (err) {
      console.error(`Error updating task with id ${id}:`, err)
      setError('Impossible de mettre à jour la tâche')
      throw err
    } finally {
      setLoading(false)
    }
  }

  return { task, loading, error, updateTask }
}
