import { useNavigate } from 'react-router-dom'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'

const Footer = () => {
  const navigate = useNavigate()

  const scrollToTopAndNavigate = (path: string) => {
    window.scrollTo(0, 0)
    navigate(path)
  }

  return (
    <div>
      <footer className='border-t border-lighterGray w-full flex flex-col items-center px-8 py-6'>
        <div className='w-full md:w-full mx-auto flex flex-col md:flex-row md:justify-between p-6 md:p-8'>
          <div className='flex flex-col items-center md:items-start md:ml-8 md:ml-mr-8 md:mt-4 md:p-2 mb-6 md:mb-0'>
            <p className='font-poppins font-bold text-2xl mb-4'>Furniro.</p>
            <p className='font-poppins text-lightGray font-medium text-base text-center md:text-left mb-4'>
              400 University Drive Suite 200 Coral<br />
              Gables, <br />
              FL 33134 USA
            </p>
            <div className='flex mt-4 space-x-4'>
              <button
                className='w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center shadow-md'
                onClick={() => window.location.href = 'https://www.facebook.com'}
              >
                <img src={facebook} alt="Facebook" />
              </button>
              <button
                className='w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center shadow-md'
                onClick={() => window.location.href = 'https://www.instagram.com'}
              >
                <img src={instagram} alt="Instagram" />
              </button>
              <button
                className='w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center shadow-md'
                onClick={() => window.location.href = 'https://www.twitter.com'}
              >
                <img src={twitter} alt="Twitter" />
              </button>
              <button
                className='w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center shadow-md'
                onClick={() => window.location.href = 'https://www.linkedin.com'}
              >
                <img src={linkedin} alt="LinkedIn" />
              </button>
            </div>
          </div>

          <div className='flex flex-col items-center md:flex-row md:items-start md:space-x-12 mt-4 mb-6 md:mb-0'>
            <div className='flex flex-col items-center md:items-start mb-6 md:mb-4 md:mr-12'>
              <h4 className='text-lightGray font-poppins font-semibold'>Links</h4>
              <ul className='text-center md:text-left'>
                <li className='mt-4 md:mt-8'>
                  <a href="#" className='font-poppins font-semibold' onClick={() => scrollToTopAndNavigate("/")}>Home</a>
                </li>
                <li className='mt-4 md:mt-8'>
                  <a href="#" className='font-poppins font-semibold' onClick={() => scrollToTopAndNavigate("/shop")}>Shop</a>
                </li>
                <li className='mt-4 md:mt-8'>
                  <a href="#" className='font-poppins font-semibold' onClick={() => scrollToTopAndNavigate("/about")}>About</a>
                </li>
                <li className='mt-4 md:mt-8'>
                  <a href="#" className='font-poppins font-semibold' onClick={() => scrollToTopAndNavigate("/contact")}>Contact</a>
                </li>
              </ul>
            </div>
            <div className='flex flex-col items-center md:items-start mb-6 md:mb-0 md:ml-12'>
              <h4 className='text-lightGray font-poppins font-semibold'>Help</h4>
              <ul className='text-center md:text-left'>
                <li className='mt-4 md:mt-8'>
                  <a href="#" className='font-poppins font-semibold'>Payment Options</a>
                </li>
                <li className='mt-4 md:mt-8'>
                  <a href="#" className='font-poppins font-semibold'>Returns</a>
                </li>
                <li className='mt-4 md:mt-8'>
                  <a href="#" className='font-poppins font-semibold'>Privacy Policies</a>
                </li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col items-center md:items-start mb-6 md:mr-14 md:mt-4 md:mb-0'>
            <h4 className='text-lightGray font-poppins font-semibold'>Newsletter</h4>
            <form action="submit" className='flex flex-col md:flex-row items-center mt-4'>
              <input
                type="text"
                placeholder='Enter Your Email Address'
                className='text-sm border-b border-black flex-grow md:flex-grow md:h-[40px] md:mr-2 mb-2 md:mb-0'
              />
              <button
                type='submit'
                className='p-2 text-black border-b border-black text-sm font-semibold uppercase md:h-[40px]'
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className='w-full mt-6 border-t border-lighterGray pt-4 md:ml-12 md:mr-12'>
          <p className='font-poppins text-base text-center md:text-left'>2023 furniro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
