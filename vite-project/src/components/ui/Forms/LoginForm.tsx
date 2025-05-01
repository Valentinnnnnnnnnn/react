import LoginButton from '../Buttons/LoginButton'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../../../hooks/useAuth'

const LoginForm = () => {
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }
    try {
      await login(email, password)
    } catch (error) {
      setError('Invalid email or password')
      return error
    }
    navigate('/tasks')
  }

  const setEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const setPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <form
      onSubmit={submitHandler}
      className="max-w-md mx-auto bg-white shadow-lg rounded-lg px-8 py-6"
    >
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 font-semibold mb-2"
        >
          Email
        </label>
        <input
          id="email"
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition duration-200"
          type="email"
          value={email}
          onChange={setEmailHandler}
          placeholder="Email"
          required
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-gray-700 font-semibold mb-2"
        >
          Password
        </label>
        <input
          id="password"
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition duration-200"
          type="password"
          value={password}
          onChange={setPasswordHandler}
          placeholder="Password"
          required
        />
      </div>

      {error && <p className="mb-6 text-red-500 text-center">{error}</p>}

      <div className="flex items-center justify-center">
        <LoginButton />
      </div>

      <p className="mt-4 text-center text-gray-600">
        Use any email and "password" to login.
      </p>
    </form>
  )
}

export default LoginForm
