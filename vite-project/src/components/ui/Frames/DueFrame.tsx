function DueFrame({ due, isComplete }: { due: Date; isComplete: boolean }) {
  const now = new Date()
  const colorClass = isComplete
    ? 'text-gray-500'
    : due < now
      ? 'text-red-500'
      : (due.getTime() - now.getTime()) / (1000 * 60 * 60) < 48
        ? 'text-yellow-500'
        : 'text-green-500'

  const formattedDate =
    due.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }) +
    ' à ' +
    due.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })

  return (
    <>
      <p className={colorClass}>{formattedDate}</p>
    </>
  )
}

export default DueFrame
