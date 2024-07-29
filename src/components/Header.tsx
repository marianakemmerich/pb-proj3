import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import userIcon from '../assets/user-icon.svg'
import cartIcon from '../assets/cart-icon.svg'

const Header = () => {
  return (
    <div className='w-full h-[100px] flex items-center px-4'>
      <div className='flex items-center justify-between w-full max-w-screen-xl mx-auto'>
        <img src={logo} alt="Furniro" className='w-[185px]' />

        <ul className='hidden md:flex space-x-8 lg:space-x-16 font-poppins font-semibold text-base text-black'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className='flex space-x-4 lg:space-x-8'>
          <Link to="/login"><img src={userIcon} className='w-[28px]' alt="User" /></Link>
          <Link to="/cart"><img src={cartIcon} className='w-[28px]' alt="Cart" /></Link>
        </div>
      </div>
    </div>
  )
}

export default Header