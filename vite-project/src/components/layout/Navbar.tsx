import CreateButton from '../ui/Buttons/CreateButton'
import TasksButton from '../ui/Buttons/TasksButton'
import LogoutButton from '../ui/Buttons/LogoutButton'
import HelloFrame from '../ui/Frames/HelloFrame'

function Navbar() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="mb-4">
      <HelloFrame />
      </div>
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
      <TasksButton />
      <CreateButton />
      <LogoutButton />
      </div>
    </div>
  )
}

export default Navbar
