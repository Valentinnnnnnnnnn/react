import { useState, useEffect, useCallback } from 'react'
import { TodoAPI } from '../services/api'
import { TaskProps } from '../types/taskType'
import { TaskFormType } from '../types/taskFormType'

export const useTodos = () => {
  const [todos, setTodos] = useState<TaskProps[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Charger les todos
  const fetchTodos = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const data = await TodoAPI.getAll()
      setTodos(data)
    } catch (err) {
      console.error('Error fetching todos:', err)
      setError('Impossible de charger les tâches')
    } finally {
      setLoading(false)
    }
  }, [])

  // Charger les todos au montage du composant
  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  // Ajouter un todo
  const addTodo = async (todoData: TaskFormType) => {
    setLoading(true)

    try {
      const newTodo = await TodoAPI.create(todoData)
      setTodos((prevTodos) => [...prevTodos, newTodo])
      return newTodo
    } catch (err) {
      console.error('Error adding todo:', err)
      setError("Impossible d'ajouter la tâche")
      throw err
    } finally {
      setLoading(false)
    }
  }

  // Supprimer un todo
  const deleteTodo = async (id: string) => {
    try {
      await TodoAPI.delete(id)
      setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id))
    } catch (err) {
      console.error('Error deleting todo:', err)
      setError('Impossible de supprimer la tâche')
      throw err
    }
  }

  // Basculer l'état complété d'un todo
  const toggleTodoCompleted = async (id: string) => {
    try {
      const todo = todos.find((t) => t._id === id)
      if (!todo) throw new Error('Todo not found')

      const updatedTodo = await TodoAPI.toggleComplete(id)

      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo._id === id ? updatedTodo : todo))
      )

      return updatedTodo
    } catch (err) {
      console.error('Error toggling todo completion:', err)
      setError('Impossible de mettre à jour la tâche')
      throw err
    }
  }

  return {
    tasks: todos,
    loading,
    error,
    fetchTodos,
    addTodo,
    deleteTodo,
    toggleTodoCompleted
  }
}
