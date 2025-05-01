import CreateButton from '../ui/Buttons/CreateButton'
import TasksButton from '../ui/Buttons/TasksButton'
import LogoutButton from '../ui/Buttons/LogoutButton'
import HelloFrame from '../ui/Frames/HelloFrame'

function Navbar() {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="w-full flex justify-start space-x-2">
        <TasksButton />
        <CreateButton />
      </div>

      <HelloFrame />

      <LogoutButton />
    </div>
  )
}

export default Navbar
