import { Priority } from './priorityType'

export interface TaskFormType {
  _id?: string
  title: string
  description?: string
  dueDate?: Date
  priority: Priority
}
