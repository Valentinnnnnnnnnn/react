import trashIcon from "../../../assets/icons/trashIcon.svg"

function Delete({taskId}: {taskId: string}) {
    const deleteHandler = async () => {
        const url = `https://api.ex.com/tasks/delete/${taskId}`
        console.log(url)
        // Delete task using API
    }

    return (
        <button
                        onClick={() => deleteHandler}
                        className="p-2 hover:bg-gray-100 rounded-full"
                        aria-label="Supprimer"
                    >
                        <img src={trashIcon} alt="Trash Icon" className="w-5 h-5" />
                    </button>
    );
}

export default Delete