import { useAuth } from "../../../hooks/useAuth";
import { Navigate } from "react-router";

const LogoutButton = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    <Navigate to="/tasks" />
  };
  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      Logout
    </button>
  )
}

export default LogoutButton