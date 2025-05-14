import React from 'react'

export const TaskSkeleton: React.FC = () => (
  <div className="relative flex flex-col bg-white rounded-2xl shadow-md p-6 h-60 animate-pulse">
    {/* Header Skeleton */}
    <div className="h-6 bg-gray-300 rounded w-3/4 space-x-3"></div>

    {/* Description Skeleton */}
    <div className="mt-4 h-6 bg-gray-300 rounded w-full"></div>
    {/* Footer Skeleton */}
    <div className="flex items-center justify-between mt-auto">
      <div className="flex flex-col space-y-2">
        <div className="h-4 bg-gray-300 rounded w-30"></div>
        <div className="h-4 bg-gray-300 rounded w-30"></div>
      </div>
      <div className="flex space-x-3">
        <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
        <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  </div>
)

export const TaskListSkeleton: React.FC<{ background: string }> = ({
  background
}) => (
  <div className={background}>
    {[...Array(9)].map((_, i) => (
      <TaskSkeleton key={i} />
    ))}
  </div>
)

export const FormSkeleton: React.FC = () => (
  <div className="bg-white shadow-md rounded-lg p-6 animate-pulse px-8 pt-6 pb-8 mb-4 w-3/4 mx-auto">
    <div className="space-y-4">
      <div>
        <div className="h-4 bg-gray-200 rounded mb-2 w-24"></div>
        <div className="h-8 bg-gray-200 rounded w-full"></div>
      </div>

      <div>
        <div className="h-4 bg-gray-200 rounded mb-2 w-28"></div>
        <div className="h-8 bg-gray-200 rounded w-full"></div>
      </div>

      <div>
        <div className="h-4 bg-gray-200 rounded mb-2 w-20"></div>
        <div className="h-8 bg-gray-200 rounded w-full"></div>
      </div>

      <div>
        <div className="h-4 bg-gray-200 rounded mb-2 w-24"></div>
        <div className="h-8 bg-gray-200 rounded w-full"></div>
      </div>

      <div>
        <div className="h-4 bg-gray-200 rounded mb-2 w-48"></div>
        <div className="h-8 bg-gray-200 rounded w-full"></div>
      </div>

      <div className="flex justify-start space-x-2 pt-2">
        <div className="h-10 bg-gray-200 rounded w-24"></div>
        <div className="h-10 bg-gray-200 rounded w-24"></div>
      </div>
    </div>
  </div>
)
