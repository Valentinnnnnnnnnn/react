import { PriorityColor } from '../../../types/priorityType'

function PriorityFrame({
  priority,
  isComplete
}: {
  priority: string
  isComplete: boolean
}) {
  return (
    <>
      <p
        className={
          isComplete
            ? 'text-gray-500'
            : PriorityColor[priority as keyof typeof PriorityColor]
        }
      >
        Priority : {priority}
      </p>
    </>
  )
}

export default PriorityFrame
