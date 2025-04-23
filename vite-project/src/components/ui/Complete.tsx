function Complete({completed}: {completed: boolean}) {
    const handleClick = () => {
        {/*API call to update the task*/}
    }

    return (
        <>
            {
                !completed ? (
                    <button onClick={handleClick}>
                        <input type="checkbox" checked={false} readOnly />
                        À faire
                    </button>
                ) : (
                    <button onClick={handleClick}>
                        <span style={{ fontSize: '1.5em', color: 'green' }}>✓ Fait</span>
                    </button>
                )
            }
        </>
    )
}

export default Complete