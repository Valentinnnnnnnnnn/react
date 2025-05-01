import { useAuth } from '../../../hooks/useAuth'

function HelloFrame() {
  const { user } = useAuth()

  return (
    <h1 className="w-full flex justify-center text-2xl font-bold text-gray-800">
      Hello {user?.username}
    </h1>
  )
}

export default HelloFrame
