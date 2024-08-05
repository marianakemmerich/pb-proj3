import { getAuth, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const LogoutButton: React.FC = () => {
  const auth = getAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await signOut(auth)
      navigate('/login')
    } catch (error) {
      console.error('Logout failed', error)
    }
  }

  return (
    <button onClick={handleLogout} className='bg-none text-black font-semibold font-poppins border border-black p-2 rounded'>
      Logout
    </button>
  )
}

export default LogoutButton