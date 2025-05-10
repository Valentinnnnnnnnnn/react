import { useAuth } from '../../../hooks/useAuth'
import { Navigate } from 'react-router'

const LogoutButton = () => {
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
    ;<Navigate to="/tasks" />
  }
  return (
    <div className="w-full flex justify-end">
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-700 text-black font-semibold py-3 px-6 rounded-2xl w-40 cursor-pointer"
      >
        Logout
      </button>
    </div>
  )
}

export default LogoutButton
