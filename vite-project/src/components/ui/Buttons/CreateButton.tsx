import { Link } from "react-router";

function Create() {
    return (
        <Link to="create">
            <button className="bg-amber-100 hover:bg-amber-200 text-black font-semibold py-3 px-6 rounded-2xl w-40">
            Create a task
            </button>
        </Link>
    );
}

export default Create