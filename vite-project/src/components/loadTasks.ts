import { Priority, TaskProps } from "../types/Task";

const taskExemple : TaskProps = {
    dbId: '1',
    title: 'Task 1',
    description: 'This is a task',
    completed: false,
    dueDate: new Date(),
    priority: Priority.Low,
    createdAt: new Date(),
    updatedAt: new Date(),
  }

export const tasks = [taskExemple, taskExemple, taskExemple, taskExemple, taskExemple, taskExemple]
