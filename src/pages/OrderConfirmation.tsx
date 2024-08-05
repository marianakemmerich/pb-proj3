import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const OrderConfirmation: React.FC = () => {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate('/')
  };

  return (
    <div>
      <Header />
      <div className='bg-cream w-full h-screen flex justify-center items-center'>
        <div className='bg-white p-4 md:p-8 w-4/5 md:w-1/2 h-auto md:h-1/2 rounded font-poppins flex flex-col items-center justify-center'>
          <h1 className='text-3xl md:text-5xl text-center text-golden font-bold mb-4 md:mb-8'>Thank you for your purchase!</h1>
          <p className='text-base md:text-lg text-black text-center mb-4 md:mb-8'>
            We are getting started with your order right away.<br /> 
            Your package will be sent within 48h.
          </p>
          <button 
            className='w-3/4 md:w-1/5 h-[45px] md:h-[55px] bg-golden font-semibold text-white text-base md:text-base rounded'
            onClick={handleButtonClick}
          >
            Ok
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default OrderConfirmation