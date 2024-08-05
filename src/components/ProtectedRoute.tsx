import React from 'react'
import { Navigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import { useState, useEffect } from 'react'

const ProtectedRoute: React.FC<{ element: JSX.Element }> = ({ element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const auth = getAuth()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user)
    })

    return () => unsubscribe()
  }, [auth])

  if (isAuthenticated === null) {
    return <div>Loading...</div>
  }

  return isAuthenticated ? element : <Navigate to="/login" replace />
}

export default ProtectedRoute

