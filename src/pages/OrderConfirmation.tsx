import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OrderConfirmation = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/');
  };

  return (
    <div>
      <Header />
      <div className='bg-cream w-full h-[650px] flex justify-center items-center'>
        <div className='bg-white p-4 w-1/2 h-1/2 rounded font-poppins flex flex-col items-center justify-center'>
          <h1 className='text-5xl text-golden font-bold mb-8'>Thank you for your purchase!</h1>
          <p className='text-lg text-black text-center mb-8'>
            We are getting started with your order right away.<br /> 
            Your package will be sent within 48h.
          </p>
          <button 
            className='w-1/5 h-[55px] bg-golden font-semibold text-white text-base'
            onClick={handleButtonClick}
          >
            Ok
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
