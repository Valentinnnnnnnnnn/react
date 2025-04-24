export enum Priority {
    Low = 'low',
    Medium = 'medium',
    High = 'high'
}

export interface TaskProps {
    dbId: string
    title: string
    description?: string
    completed: boolean
    dueDate?: Date
    priority: Priority
    createdAt: Date
    updatedAt: Date
}