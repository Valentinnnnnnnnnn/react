import { TaskProps } from '../types/taskType'
import { Priority } from '../types/priorityType'

const taskExemple1: TaskProps = {
  dbId: '1',
  title: 'Révision du code',
  description: 'Relire et optimiser le module loadTasks.',
  completed: true,
  dueDate: new Date('2023-09-01T10:00:00Z'),
  priority: Priority.High,
  createdAt: new Date('2023-08-15T09:00:00Z'),
  updatedAt: new Date('2023-09-01T11:00:00Z')
}

const taskExemple2: TaskProps = {
  dbId: '2',
  title: 'Mise à jour de la documentation',
  description: 'Ajouter de nouveaux exemples dans la documentation.',
  completed: false,
  dueDate: new Date('2023-10-05T12:30:00Z'),
  priority: Priority.Medium,
  createdAt: new Date('2023-09-20T08:45:00Z'),
  updatedAt: new Date('2023-09-20T08:45:00Z')
}

const taskExemple3: TaskProps = {
  dbId: '3',
  title: 'Implémenter le cache',
  description: 'Créer une stratégie de cache pour améliorer les performances.',
  completed: false,
  dueDate: new Date('2023-11-15T15:00:00Z'),
  priority: Priority.High,
  createdAt: new Date('2023-10-01T14:00:00Z'),
  updatedAt: new Date('2023-10-01T14:00:00Z')
}

const taskExemple4: TaskProps = {
  dbId: '4',
  title: 'Test unitaire pour le module X',
  // Description omise pour tester un cas optionnel
  completed: true,
  dueDate: new Date('2023-08-20T09:30:00Z'),
  priority: Priority.Low,
  createdAt: new Date('2023-08-10T10:00:00Z'),
  updatedAt: new Date('2023-08-20T10:00:00Z')
}

const taskExemple5: TaskProps = {
  dbId: '5',
  title: 'Revue de sécurité',
  description: 'Analyser les vulnérabilités et proposer des corrections.',
  completed: false,
  dueDate: new Date('2023-12-01T13:00:00Z'),
  priority: Priority.Medium,
  createdAt: new Date('2023-11-20T11:15:00Z'),
  updatedAt: new Date('2023-11-20T11:15:00Z')
}

const taskExemple6: TaskProps = {
  dbId: '6',
  title:
    'Optimisation des requêtesOptimisation des requêtesOptimisation des requêtesOptimisation des requêtesOptimisation des requêtes',
  description:
    "Réduire le temps d'exécution de la base de données.Réduire le temps d'exécution de la base de données.Réduire le temps d'exécution de la base de données.Réduire le temps d'exécution de la base de données.Réduire le temps d'exécution de la base de données.Réduire le temps d'exécution de la base de données.Réduire le temps d'exécution de la base de données.Réduire le temps d'exécution de la base de données.Réduire le temps d'exécution de la base de données.Réduire le temps d'exécution de la base de données.Réduire le temps d'exécution de la base de données.Réduire le temps d'exécution de la base de données.Réduire le temps d'exécution de la base de données.Réduire le temps d'exécution de la base de données.Réduire le temps d'exécution de la base de données.Réduire le temps d'exécution de la base de données.Réduire le temps d'exécution de la base de données.Réduire le temps d'exécution de la base de données.Réduire le temps d'exécution de la base de données.Réduire le temps d'exécution de la base de données.",
  completed: true,
  priority: Priority.High,
  createdAt: new Date('2023-07-01T08:00:00Z'),
  updatedAt: new Date('2023-08-01T12:00:00Z')
}

const taskExemple7: TaskProps = {
  dbId: '7',
  title: 'Planification de la réunion',
  completed: false,
  dueDate: new Date('2023-09-15T14:30:00Z'),
  priority: Priority.Low,
  createdAt: new Date('2023-09-01T09:15:00Z'),
  updatedAt: new Date('2023-09-01T09:15:00Z')
}

export const tasks = [
  taskExemple1,
  taskExemple2,
  taskExemple3,
  taskExemple4,
  taskExemple5,
  taskExemple6,
  taskExemple7
]
