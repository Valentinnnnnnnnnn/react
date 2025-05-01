import { Outlet, Navigate } from 'react-router'
import Navbar from './Navbar'
import { useAuth } from '../../hooks/useAuth'

const MainLayout = () => {
  const isAuthenticated = useAuth().isAuthenticated

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default MainLayout
