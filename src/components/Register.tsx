import React, { useState, useEffect } from 'react'
import { auth } from './firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'

const Register: React.FC = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (error) {
      setFirstName('')
      setLastName('')
      setEmail('')
      setPassword('')
    }
  }, [error])

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(null)
        navigate('/')
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [success, navigate])

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      setSuccess('User registered successfully!')
      setError(null)
    } catch (error) {
      setError('Failed to register. Please try again.')
      setSuccess(null)
    }
  }

  const handleFocus = () => {
    setError(null)
  }

  return (
    <div className="flex items-center justify-center h-screen font-poppins bg-gray-100">
      <div className="relative w-[400px] bg-white p-8 rounded-lg">
        <h2 className="text-4xl text-golden font-bold mb-4">Sign up</h2>
        {error && <p className="text-red-800 text-[12px] mb-4">{error}</p>}
        {success && (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="bg-green-500 text-white p-2 rounded">{success}</p>
          </div>
        )}
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <input
              placeholder='First name'
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onFocus={handleFocus}
              className="w-full p-2 border border-lightGray rounded focus:border-pink-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              placeholder='Last name'
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              onFocus={handleFocus}
              className="w-full p-2 border border-lightGray rounded focus:border-pink-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              placeholder='Email'
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={handleFocus}
              className="w-full p-2 border border-lightGray rounded focus:border-pink-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              placeholder='Password'
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={handleFocus}
              className="w-full p-2 border border-lightGray rounded focus:border-pink-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-golden text-white rounded"
          >
            Register
          </button>
        </form>

        <p className='text-center text-graphite text-sm mt-2'>Already have an account? <Link to="/login" className='text-golden'>Log in</Link>.</p>
      </div>
    </div>
  )
}

export default Register
