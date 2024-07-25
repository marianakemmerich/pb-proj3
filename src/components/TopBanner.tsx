import React from 'react'
import backgroundImg from '../assets/background-img.svg'
import arrow from '../assets/arrow-right.svg'

interface TopBannerProps {
    title: string,
    section: string
}

const TopBanner: React.FC<TopBannerProps> = ({title, section}) => {
  return (
    <div 
      style={{backgroundImage: `url(${backgroundImg})`}} 
      className='relative overflow-hidden flex items-center justify-center bg-cover bg-no-repeat bg-center w-full h-[316px]'
    >
      <div className='text-black font-poppins p-4 text-center'>
        <h1 className='text-5xl font-bold mb-2'>{title}</h1>
        <div className='flex items-center justify-center'>
          <p className='text-base font-semibold mr-2'>Home</p>
          <img src={arrow} alt="Arrow" className='w-[20px] mx-0'/>
          <p className='text-base ml-2'>{section}</p>
        </div>
      </div>
    </div>
  )
}

export default TopBanner

