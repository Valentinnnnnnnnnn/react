import { Priority } from './priorityType'

export interface TaskProps {
  _id: string
  title: string
  description?: string
  completed: boolean
  dueDate?: Date
  priority: Priority
  createdAt: Date
  updatedAt: Date
}
