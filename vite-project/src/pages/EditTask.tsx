import { useParams } from 'react-router'

function Edit() {
  const { taskId } = useParams()
  return (
    <div>
      <h1>Edit Task</h1>
      <p>{taskId}</p>
    </div>
  )
}

export default Edit
