function Delete({taskId}: {taskId: string}) {
    const deleteHandler = async () => {
        const url = `https://api.ex.com/tasks/delete/${taskId}`
        console.log(url)
        // Delete task using API
    }

    return (
            <button className="bg-red-500 text-white font-bold py-2 px-4 rounded" onClick={deleteHandler}>
                Delete
            </button>
    );
}

export default Delete