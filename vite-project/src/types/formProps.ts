import { TaskProps } from './taskType'

export interface FormProps {
  initialData: TaskProps
  isEdit: boolean
  onSubmit: (taskData: TaskProps) => void
}
