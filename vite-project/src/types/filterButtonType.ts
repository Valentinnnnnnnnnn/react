export interface FilterButtonProps {
    text: string
    checkedClasses?: string
    uncheckedClasses?: string
    iconWidth?: number
    onInteraction: () => void
    defaultChecked?: boolean
}