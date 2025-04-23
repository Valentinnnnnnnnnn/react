function Delete({taskId}: {taskId: string}) {
    const deleteHandler = async () => {
        const url = `https://api.ex.com/tasks/delete/${taskId}`
        console.log(url)
        // Delete task using API
    }

    return (
        <></>
    );
}

export default Delete