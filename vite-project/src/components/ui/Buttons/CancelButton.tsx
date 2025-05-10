import { Link } from 'react-router'

function Create() {
  return (
    <Link to="/tasks">
      <button className="bg-red-500 hover:bg-red-700 text-black font-semibold py-3 px-6 rounded-2xl w-40 cursor-pointer">
        Cancel
      </button>
    </Link>
  )
}

export default Create
