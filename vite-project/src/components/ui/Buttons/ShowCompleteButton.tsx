import React, { useState } from "react"
import checkIcon from "../../../assets/icons/checkIcon.svg"

export interface FilterButtonProps {
    id: string
    text: string
    checkedClasses?: string
    uncheckedClasses?: string
    iconWidth?: number
}

const FilterButton: React.FC<FilterButtonProps> = ({
    id,
    text,
    checkedClasses = "bg-amber-100 border-amber-100 text-white",
    uncheckedClasses = "border-gray-300 bg-white hover:bg-gray-100",
    iconWidth = 12,
}) => {
    const [checked, setChecked] = useState(false)

    const checkHandler = () => setChecked(prev => !prev)

    return (
        <div className="flex items-center" id={id}>
            <button
                onClick={checkHandler}
                className={`flex items-center justify-center
                    w-6 h-6 rounded-full border-2 transition-colors duration-150
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