import trophy from '../assets/trophy.svg';
import stamp from '../assets/stamp.svg';
import shipping from '../assets/shipping.svg';
import customerSupport from '../assets/customer-support.svg';

const Banner = () => {
  return (
    <div className="w-full h-[250px] bg-cream flex items-center justify-center px-4">
      <div className="w-full max-w-[1334px] h-[70px] flex justify-between mx-8">
        <div className='flex items-center w-[337px]'>
          <img src={trophy} className='w-[60px] mr-4'/>
          <div>
            <h3 className='font-poppins text-2xl font-semibold'>High Quality</h3>
            <p className='font-poppins text-lg font-medium text-darkGray'>Crafted from top materials</p>
          </div>
        </div>
        <div className="flex items-center w-[328px]">
          <img src={stamp} className='w-[60px] mr-4'/>
          <div>
            <h3 className='font-poppins text-2xl font-semibold'>Warranty Protection</h3>
            <p className='font-poppins text-lg font-medium text-darkGray'>Over 2 years</p>
          </div>
        </div>
        <div className=" flex items-center w-[244px]">
          <img src={shipping} className='w-[60px] mr-4'/>
          <div>
            <h3 className='font-poppins text-2xl font-semibold'>Free Shipping</h3>
            <p className='font-poppins text-lg font-medium text-darkGray'>Order over $150</p>
          </div>
        </div>
        <div className="flex items-center w-[259px]">
          <img src={customerSupport} className='w-[60px] mr-4'/>
          <div>
            <h3 className='font-poppins text-2xl font-semibold'>24/7 Support</h3>
            <p className='font-poppins text-lg font-medium text-darkGray'>Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

