import { Link } from "react-router";

function Edit({taskId}: {taskId: string}) {
    return (
        <Link to={"/edit/" + taskId}>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                Edit
            </button>
        </Link>
    );
}

export default Edit