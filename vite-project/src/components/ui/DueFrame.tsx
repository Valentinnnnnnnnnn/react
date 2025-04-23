function DueFrame({due}: {due: Date}) {
    const now = new Date();
    let colorClass = "";

    if (due < now) {
        colorClass = "text-red-500"; // Date passée
    } else {
        const diffHours = (due.getTime() - now.getTime()) / (1000 * 60 * 60);
        if (diffHours < 48) {
            colorClass = "text-yellow-500"; // Moins de 48h
        } else {
            colorClass = "text-green-500"; // Date lointaine
        }
    }

    let formattedDate = due.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' }) + ' à ' + due.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })

    return (
        <>
            <p className={colorClass}>{formattedDate}</p>
        </>
    )
}

export default DueFrame