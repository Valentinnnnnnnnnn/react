function DueFrame({
  due,
  isComplete
}: {
  due: Date | string
  isComplete: boolean
}) {
  const now = new Date()
  const dueDate = new Date(due)

  const colorClass = isComplete
    ? 'text-gray-500'
    : dueDate < now
      ? 'text-red-500'
      : (dueDate.getTime() - now.getTime()) / (1000 * 60 * 60) < 48
        ? 'text-yellow-500'
        : 'text-green-500'

  const formattedDate =
    dueDate.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }) +
    ' à ' +
    dueDate.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })

  return (
    <>
      <p className={colorClass}>{formattedDate}</p>
    </>
  )
}

export default DueFrame
