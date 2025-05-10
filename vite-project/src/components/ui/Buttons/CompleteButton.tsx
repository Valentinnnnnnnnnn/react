import checkIcon from '../../../assets/icons/checkIcon.svg'

function Complete({
  completed,
  taskId,
  onToggleCompeted,
}: {
  completed: boolean
  taskId: string,
  onToggleCompeted: (id: string) => void
}) {
  const checkHandler = async () => {
    onToggleCompeted(taskId)
  }

  return (
    <button
      onClick={checkHandler}
      className={`
                flex items-center justify-center
                w-6 h-6 rounded-full border-2
                transition-colors duration-150
                ${
                  completed
                    ? 'bg-amber-100 border-amber-100 text-white'
                    : 'border-gray-300 bg-white hover:bg-gray-100'
                }
            `}
      aria-label={
        completed ? 'Marquer comme non terminée' : 'Marquer comme terminée'
      }
    >
      {completed && <img src={checkIcon} alt="check" width={12} />}
    </button>
  )
}

export default Complete
