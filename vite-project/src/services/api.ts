import dotenv from 'dotenv';
import { TaskProps } from '../types/taskType';
import { TaskFormType } from '../types/taskFormType';

dotenv.config();

const API_URL = process.env.API_CUSTOM_URL;

if (!API_URL) {
  throw new Error("API_CUSTOM_URL is not defined in the .env file");
}

// Timeout helper pour simuler la latence réseau
const timeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Fetch avec timeout pour simuler une latence
const fetchWithTimeout = async (url: string, options?: RequestInit) => {
  // Simuler une latence de 500ms pour voir les états de chargement
  await timeout(500); 
  return fetch(url, options);
};

// Gestionnaire d'erreurs génériques
const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    const errorMessage = errorData?.message || `Error: ${response.status} ${response.statusText}`;
    throw new Error(errorMessage);
  }
  return response.json();
};

// API Todo
export const TodoAPI = {
  // Récupérer tous les tasks
  getAll: async (): Promise<TaskProps[]> => {
    const response = await fetchWithTimeout(`${API_URL}/tasks`);
    return handleResponse(response);
  },

  // Récupérer un todo par ID
  getById: async (id: number): Promise<TaskProps> => {
    const response = await fetchWithTimeout(`${API_URL}/tasks/${id}`);
    return handleResponse(response);
  },

  // Créer un nouveau todo
  create: async (todoData: TaskFormType): Promise<TaskProps> => {
    const response = await fetchWithTimeout(`${API_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todoData)
    });
    return handleResponse(response);
  },

  // Mettre à jour un todo
  update: async (id: number, todoData: TaskFormType): Promise<TaskProps> => {
    const response = await fetchWithTimeout(`${API_URL}/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...todoData, id })
    });
    return handleResponse(response);
  },

  // Supprimer un todo
  delete: async (id: number): Promise<void> => {
    const response = await fetchWithTimeout(`${API_URL}/tasks/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error(`Failed to delete todo with id ${id}`);
    }
  },

  // Basculer l'état de complétion d'un todo
  toggleComplete: async (id: number): Promise<TaskProps> => {
    const response = await fetchWithTimeout(`${API_URL}/tasks/${id}/toggle`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    return handleResponse(response);
  }
};