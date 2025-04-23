import { createRoot } from 'react-dom/client'
import './index.css'
import { Routes, Route, BrowserRouter } from 'react-router'
import Tasks from './pages/Tasks'
import CreateTask from './pages/CreateTask'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Tasks />} />
      <Route path="/create" element={<CreateTask />} />
    </Routes>
  </BrowserRouter>,
)