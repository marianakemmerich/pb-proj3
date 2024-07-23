import logo from '../assets/logo.svg';
import userIcon from '../assets/user-icon.svg';
import cartIcon from '../assets/cart-icon.svg';

const Header = () => {
  return (
    <div className='w-full h-[100px] flex items-center px-4'>
      <div className='flex items-center justify-between w-full max-w-screen-xl ml-10 mr-16'>
        <img src={logo} alt="Furniro" className='w-[185px]' />

        <ul className='flex space-x-16 font-poppins font-semibold text-base text-black'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <div className='flex space-x-8'>
          <button><img src={userIcon} className='w-[28px]' alt="User" /></button>
          <button><img src={cartIcon} className='w-[28px]' alt="Cart" /></button>
        </div>
      </div>
    </div>
  );
};

export default Header;

