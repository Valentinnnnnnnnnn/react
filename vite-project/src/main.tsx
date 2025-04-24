import { createRoot } from 'react-dom/client'
import './index.css'
import { Navigate, Routes, Route, BrowserRouter } from 'react-router'
import Tasks from './pages/Tasks'
import CreateTask from './pages/CreateTask'
import Edit from './pages/EditTask'
import Login from './pages/Login'
import MainLayout from './components/layout/MainLayout'
import { AuthProvider } from './utils/AuthContext'

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />

      <Route path="/tasks" element={<MainLayout />} >
        <Route index element={<Tasks />} />
        <Route path="create" element={<CreateTask />} />
        <Route path="edit/:taskId" element={<Edit />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
      
    </Routes>
  </BrowserRouter>
  </AuthProvider>,
)