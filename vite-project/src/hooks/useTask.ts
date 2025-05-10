// src/hooks/useTodo.ts
import { useState, useEffect } from 'react'
import { TodoAPI } from '../services/api'
import { TaskProps } from '../types/taskType'
import { TaskFormType } from '../types/taskFormType'

export const useTodo = (id?: string) => {
  const [todo, setTodo] = useState<TaskProps | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Charger un todo par son ID
  useEffect(() => {
    if (!id) return

    const fetchTodo = async () => {
      setLoading(true)
      setError(null)

      try {
        const data = await TodoAPI.getById(id)
        setTodo(data)
      } catch (err) {
        console.error(`Error fetching todo with id ${id}:`, err)
        setError(`Impossible de charger la tâche #${id}`)
      } finally {
        setLoading(false)
      }
    }

    fetchTodo()
  }, [id])

  // Mettre à jour un todo
  const updateTodo = async (todoData: TaskFormType) => {
    if (!id) {
      setError('ID de la tâche manquant')
      throw new Error('Todo ID is required')
    }

    setLoading(true)
    setError(null)

    try {
      const updatedTodo = await TodoAPI.update(id, todoData)
      setTodo(updatedTodo)
      return updatedTodo
    } catch (err) {
      console.error(`Error updating todo with id ${id}:`, err)
      setError('Impossible de mettre à jour la tâche')
      throw err
    } finally {
      setLoading(false)
    }
  }

  return { todo, loading, error, updateTodo }
}
