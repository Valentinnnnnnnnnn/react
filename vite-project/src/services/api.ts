import { TaskProps } from '../types/taskType'
import { TaskFormType } from '../types/taskFormType'

const API_URL = import.meta.env.VITE_API_URL
console.log('API_URL:', API_URL)
if (!API_URL) {
  throw new Error('VITE_API_URL is not defined in the environment variables')
}

// Timeout helper pour simuler la latence réseau
const timeout = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

// Fetch avec timeout pour simuler une latence
const fetchWithTimeout = async (url: string, options?: RequestInit) => {
  // Simuler une latence de 500ms pour voir les états de chargement
  await timeout(500)
  return fetch(url, options)
}

// Gestionnaire d'erreurs génériques
const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => null)
    const errorMessage =
      errorData?.message || `Error: ${response.status} ${response.statusText}`
    throw new Error(errorMessage)
  }
  return response.json()
}

// API Task
export const TaskAPI = {
  // Récupérer tous les tasks
  getAll: async (): Promise<TaskProps[]> => {
    const response = await fetchWithTimeout(`${API_URL}/tasks`)
    return handleResponse(response)
  },

  // Récupérer un task par ID
  getById: async (id: string): Promise<TaskProps> => {
    const response = await fetchWithTimeout(`${API_URL}/tasks/${id}`)
    return handleResponse(response)
  },

  // Créer un nouveau task
  create: async (taskData: TaskFormType): Promise<TaskProps> => {
    const response = await fetchWithTimeout(`${API_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(taskData)
    })
    return handleResponse(response)
  },

  // Mettre à jour un task
  update: async (id: string, taskData: TaskFormType): Promise<TaskProps> => {
    const response = await fetchWithTimeout(`${API_URL}/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...taskData, id })
    })
    return handleResponse(response)
  },

  // Supprimer un task
  delete: async (id: string): Promise<void> => {
    const response = await fetchWithTimeout(`${API_URL}/tasks/${id}`, {
      method: 'DELETE'
    })
    if (!response.ok) {
      throw new Error(`Failed to delete task with id ${id}`)
    }
  },

  // Basculer l'état de complétion d'un task
  toggleComplete: async (id: string): Promise<TaskProps> => {
    const response = await fetchWithTimeout(`${API_URL}/tasks/${id}/toggle`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return handleResponse(response)
  }
}
