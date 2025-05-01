import { Link } from "react-router";
import editIcon from "../../../assets/icons/editIcon.svg";

function Edit({taskId}: {taskId: string}) {
    return (
        <Link to={"tasks/edit/" + taskId}>
            <button
                onClick={() => console.log(taskId)}
                className="p-2 hover:bg-gray-100 rounded-full"
                aria-label="Modifier"
            >
                <img src={editIcon} alt="Edit Icon" className="w-5 h-5" />
            </button>
        </Link>
    );
}

export default Edit