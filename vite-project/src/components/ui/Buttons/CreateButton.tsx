import { Link } from "react-router";

function Create() {
    return (
        <Link to="/create">
            <button className="bg-amber-100 text-black font-semibold py-3 px-6 rounded-2xl">
            Create a task
            </button>
        </Link>
    );
}

export default Create