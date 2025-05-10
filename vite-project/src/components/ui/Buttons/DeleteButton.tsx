import trashIcon from '../../../assets/icons/trashIcon.svg'

function Delete({
  taskId,
  onDelete
}: {
  taskId: string
  onDelete: (id: string) => void
}) {
  const deleteHandler = async () => {
    onDelete(taskId)
  }

  return (
    <button
      onClick={deleteHandler}
      className="p-2 hover:bg-gray-100 rounded-full"
      aria-label="Supprimer"
    >
      <img src={trashIcon} alt="Trash Icon" className="w-5 h-5" />
    </button>
  )
}

export default Delete
