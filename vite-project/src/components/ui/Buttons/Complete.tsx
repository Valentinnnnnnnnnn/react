function Complete({completed, taskId}: {completed: boolean, taskId: string}) {
    const checkHandler = async () => {
        const url = `https://api.ex.com/tasks/toggle/${taskId}`
        console.log(url)
    }
    const uncheckHandler = async () => {
        const url = `https://api.ex.com/tasks/toggle/${taskId}`
        console.log(url)
    }

    return (
        <>
            {
                !completed ? (
                    <button onClick={checkHandler}>
                        <input type="checkbox" checked={false} readOnly />
                        À faire
                    </button>
                ) : (
                    <button onClick={uncheckHandler}>
                        <span style={{ fontSize: '1.5em', color: 'green' }}>✓ Fait</span>
                    </button>
                )
            }
        </>
    )
}

export default Complete