import { useState, useEffect, useCallback } from 'react'
import { TaskAPI } from '../services/api'
import { TaskProps } from '../types/taskType'
import { TaskFormType } from '../types/taskFormType'

export const useTasks = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Charger les tasks
  const fetchTasks = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const data = await TaskAPI.getAll()
      setTasks(data)
    } catch (err) {
      console.error('Error fetching tasks:', err)
      setError('Impossible de charger les tâches')
    } finally {
      setLoading(false)
    }
  }, [])

  // Charger les tasks au montage du composant
  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

  // Ajouter un task
  const addTask = async (taskData: TaskFormType) => {
    setLoading(true)

    try {
      const newTask = await TaskAPI.create(taskData)
      setTasks((prevTasks) => [...prevTasks, newTask])
      return newTask
    } catch (err) {
      console.error('Error adding task:', err)
      setError("Impossible d'ajouter la tâche")
      throw err
    } finally {
      setLoading(false)
    }
  }

  // Supprimer un task
  const deleteTask = async (id: string) => {
    try {
      await TaskAPI.delete(id)
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id))
    } catch (err) {
      console.error('Error deleting task:', err)
      setError('Impossible de supprimer la tâche')
      throw err
    }
  }

  // Basculer l'état complété d'un task
  const toggleTaskCompleted = async (id: string) => {
    try {
      const task = tasks.find((t) => t._id === id)
      if (!task) throw new Error('Task not found')

      const updatedTask = await TaskAPI.toggleComplete(id)

      setTasks((prevTasks) =>
        prevTasks.map((task) => (task._id === id ? updatedTask : task))
      )

      return updatedTask
    } catch (err) {
      console.error('Error toggling task completion:', err)
      setError('Impossible de mettre à jour la tâche')
      throw err
    }
  }

  return {
    tasks: tasks,
    loading,
    error,
    fetchTasks,
    addTask,
    deleteTask,
    toggleTaskCompleted
  }
}
