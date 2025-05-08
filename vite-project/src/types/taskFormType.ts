import { Priority } from './priorityType';

export interface TaskFormType {
    title: string;
    description?: string;
    dueDate?: Date;
    priority: Priority;
}
