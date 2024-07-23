import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';
import linkedin from '../assets/linkedin.svg';

const Footer = () => {
  return (
    <div>
      <footer className='border-t border-lighterGray w-full h-[505px] flex items-center px-8'>
        <div className='w-[1240px] h-[419px] mx-auto flex flex-col justify-between p-6'>
          <div className='flex flex-row justify-between items-start'>
            <div className='h-full flex-1'>
              <p className='font-poppins font-bold text-2xl mb-10'>Furniro.</p>
              <p className='font-poppins text-lightGray font-medium text-base w-[285px] mb-14'>400 University Drive Suite 200 Coral<br />
                 Gables, <br />
                 FL 33134 USA</p> 
              <div className='flex space-x-4'>
                <button className='w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center shadow-md'><img src={facebook} alt="Facebook" /></button>
                <button className='w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center shadow-md'><img src={instagram} alt="Instagram" /></button>
                <button className='w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center shadow-md'><img src={twitter} alt="Twitter" /></button>
                <button className='w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center shadow-md'><img src={linkedin} alt="LinkedIn" /></button>
              </div>
            </div>

            <div className='w-[710px] h-[312px] flex flex-row justify-between items-start'>
                <div className='w-[68px] h-full font-poppins font-semibold text-base mr-8'>
                    <h4 className='text-lightGray'>Links</h4>
                    <ul>
                        <li className='mt-12 mb-10'><a href="#">Home</a></li>
                        <li className='mt-12 mb-10'><a href="#">Shop</a></li>
                        <li className='mt-12 mb-10'><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li> 
                    </ul>
                    
                </div>
                <div className='h-full font-poppins font-semibold text-base mr-10'>
                    <h4 className='text-lightGray'>Help</h4>
                    <ul className=''>
                        <li className='mt-12 mb-10'><a href="#">Payment Options</a></li>
                        <li className='mt-12 mb-10'><a href="#">Returns</a></li>
                        <li className='mt-12 mb-10'><a href="#">Privacy Policies</a></li>  
                    </ul>
                    
                </div>
                <div className='w-[286px] font-poppins text-base mr-14'>
                    <h4 className='text-lightGray font-semibold'>Newsletter</h4>
                    <form action="submit" className='flex mt-10'>
                        <input type="text" placeholder='Enter Your Email Address' className='text-sm border-b border-black flex-grow' />
                        <button type='submit' className='ml-2 p-2 text-black border-b border-black text-sm font-semibold uppercase'>Subscribe</button>
                    </form>
                </div>

            </div>

          </div>

          <div className='mt-8 h-[59px] border-t border-lighterGray flex items-end justify-start'>
            <p className='font-poppins text-base mt-12 flex items-end'>2023 furniro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

