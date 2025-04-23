import { Link } from "react-router";

function Create() {
    return (
        <Link to="/">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Cancel
            </button>
        </Link>
    );
}

export default Create