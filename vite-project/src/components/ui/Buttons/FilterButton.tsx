import React, { useState } from 'react'
import checkIcon from '../../../assets/icons/checkIcon.svg'
import { FilterButtonProps } from '../../../types/filterButtonType'

const FilterButton: React.FC<FilterButtonProps> = ({
  text,
  checkedClasses = 'bg-amber-100 border-amber-100 text-white',
  uncheckedClasses = 'border-gray-300 bg-white hover:bg-gray-100',
  iconWidth = 12,
  onInteraction,
  defaultChecked
}) => {
  const [checked, setChecked] = useState(defaultChecked)

  const checkHandler = () => {
    setChecked((prev) => !prev)
    onInteraction()
  }

  return (
    <div className="flex items-center">
      <button
        onClick={checkHandler}
        className={`flex items-center justify-center
                    w-6 h-6 rounded-full border-2 transition-colors duration-150 cursor-pointer
                    ${checked ? checkedClasses : uncheckedClasses}`}
      >
        {checked && <img src={checkIcon} alt="check" width={iconWidth} />}
      </button>
      <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {text}
      </span>
    </div>
  )
}

export default FilterButton
