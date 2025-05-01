import { useState } from 'react'
import TaskList from '../components/layout/TaskList'
import { tasks } from '../components/loadTasks'
import FiltersFrame from '../components/ui/Frames/FiltersFrame'
import { Filters } from '../types/filtersType'

function Tasks() {
  const [activeFilters, setActiveFilters] = useState<Filters>({
    completed: false,
    low: true,
    medium: true,
    high: true
  })

  return (
    <>
      <FiltersFrame
        setFilters={setActiveFilters}
        defaultFilters={activeFilters}
      />
      <TaskList tasks={tasks} filters={activeFilters} />
    </>
  )
}

export default Tasks
