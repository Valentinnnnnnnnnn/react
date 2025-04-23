import { Link } from "react-router";

function Edit({taskId}: {taskId: string}) {
    return (
        <Link to={"/edit/" + taskId}>
            
        </Link>
    );
}

export default Edit