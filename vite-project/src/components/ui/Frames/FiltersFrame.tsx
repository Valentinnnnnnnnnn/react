import FilterButton from "../Buttons/FilterButton"
import { PriorityColor } from "../../../types/priorityType"
import { Filters } from "../../../types/filtersType"

const FiltersFrame = ({setFilters}: {setFilters: React.Dispatch<React.SetStateAction<Filters>>}) => {
  return (
    <>
        <div className="justify-center gap:5 pt-10 flex flex-col sm:flex-row sm:flex-wrap sm:gap-10">
            <FilterButton 
                text="Show complete"
                onInteraction={() =>
                    {
                    setFilters((prevFilters: Filters) => ({
                        ...prevFilters,
                        completed: !prevFilters.completed,
                    }))
                  }
                }
            />

            <FilterButton
                text="Low priority"
                checkedClasses={`bg-${PriorityColor.Low} border-${PriorityColor.Low} text-white`}
                uncheckedClasses={`border-${PriorityColor.Low} bg-white hover:bg-gray-100`}
                onInteraction={() =>
                    setFilters((prevFilters: Filters) => ({
                      ...prevFilters,
                      low: !prevFilters.low,
                    }))
                  }
            />

            <FilterButton
                text="Medium priority"
                checkedClasses={`bg-${PriorityColor.Medium} border-${PriorityColor.Medium} text-white`}
                uncheckedClasses={`border-${PriorityColor.Medium} bg-white hover:bg-gray-100`}
                onInteraction={() =>
                    setFilters((prevFilters: Filters) => ({
                      ...prevFilters,
                      medium: !prevFilters.medium,
                    }))
                  }
            />

            <FilterButton
                text="High priority"
                checkedClasses={`bg-${PriorityColor.High} border-${PriorityColor.High} text-white`}
                uncheckedClasses={`border-${PriorityColor.High} bg-white hover:bg-gray-100`}
                onInteraction={() =>
                    setFilters((prevFilters: Filters) => ({
                      ...prevFilters,
                      high: !prevFilters.high,
                    }))
                  }
            />
        </div>
    </>
  )
}

export default FiltersFrame