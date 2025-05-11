function Submit({isActive, isEdit}: { isActive: boolean, isEdit: boolean }) {
  return (
    <button
      type="submit"
      disabled={!isActive}
      className={`bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-6 rounded-2xl w-40 ${!isActive ? "cursor-not-allowed" : "cursor-pointer"}`}
    >
      {isEdit ? 'Edit task' : 'Create task'}
    </button>
  )
}

export default Submit
