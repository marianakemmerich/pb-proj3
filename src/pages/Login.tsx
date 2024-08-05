import React from 'react'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import cover from '../assets/login-cover.jpeg'
import logo from '../assets/furniro-icon.svg'

const Login: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex flex-col md:flex-row flex-1 w-full'>
        <div
          className='hidden md:flex relative overflow-hidden items-center justify-center w-full md:w-3/5'
          style={{
            backgroundImage: `linear-gradient(to right, rgba(250, 243, 234, 0.6) 40%, #faf3ea 100%), url(${cover})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div className='relative z-10 text-black text-center p-6'>
            <img src={logo} className='w-[150px] md:w-[200px] mx-auto mb-4' />
            <p className='font-poppins text-4xl md:text-5xl font-bold'>Furniro</p>
          </div>
        </div>
        <div className='w-full md:w-2/5 flex items-center justify-center bg-cream'>
          <div className='flex flex-col items-center p-6 max-h-full overflow-auto'>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login