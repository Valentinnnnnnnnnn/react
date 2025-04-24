import { Link } from "react-router";

function Edit({taskId}: {taskId: string}) {
    return (
        <Link to={"tasks/edit/" + taskId}>
            
        </Link>
    );
}

export default Edit