import FilterButton from "../Buttons/FilterButton"
import { PriorityColor } from "../../../types/priorityType"

const FiltersFrame = () => {
  return (
    <>
        <div className="justify-center gap:5 pt-10 flex flex-col sm:flex-row sm:flex-wrap sm:gap-10">
            <FilterButton 
                id="show-complete"
                text="Show complete"
            />

            <FilterButton
                id="show-low-priority"
                text="Low priority"
                checkedClasses={`bg-${PriorityColor.Low} border-${PriorityColor.Low} text-white`}
                uncheckedClasses={`border-${PriorityColor.Low} bg-white hover:bg-gray-100`}
            />

            <FilterButton
                id="show-medium-priority"
                text="Medium priority"
                checkedClasses={`bg-${PriorityColor.Medium} border-${PriorityColor.Medium} text-white`}
                uncheckedClasses={`border-${PriorityColor.Medium} bg-white hover:bg-gray-100`}
            />

            <FilterButton
                id="show-high-priority"
                text="High priority"
                checkedClasses={`bg-${PriorityColor.High} border-${PriorityColor.High} text-white`}
                uncheckedClasses={`border-${PriorityColor.High} bg-white hover:bg-gray-100`}
            />
        </div>
    </>
  )
}

export default FiltersFrame