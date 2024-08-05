import { useEffect, useState } from 'react'
import Header from '../components/Header'
import TopBanner from '../components/TopBanner'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import CheckoutForm from '../components/CheckoutForm'
import { ICartProduct } from '../types/Products'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const [cartItems, setCartItems] = useState<ICartProduct[]>([])
  const [selectedOption, setSelectedOption] = useState<string>('')
  const navigate = useNavigate()

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCartItems(cart)
  }, [])

  const calculateSubtotal = (price: number, quantity: number) => price * quantity
  const total = cartItems.reduce((acc, item) => acc + calculateSubtotal(item.salePrice, item.quantity), 0)

  const handleOptionChange = (option: string) => {
    setSelectedOption(option)
  }

  const handlePlaceOrder = () => {
    navigate('/confirmation')
  }

  return (
    <div>
      <Header />
      <TopBanner title='Checkout' section='Checkout' />
      <div className='w-full flex flex-col md:flex-row md:h-[1292px] justify-center items-center font-poppins'>
        <div className='w-full md:w-[1242px] flex flex-col md:flex-row'>
          <div className='w-full md:w-[608px] h-full flex justify-center items-center'>
            <CheckoutForm />
          </div>

          <div className='w-full md:w-[608px] h-auto md:h-[789px] mt-2 md:mt-4 p-4'>
            <div className='p-8 flex flex-row md:flex-row justify-between border-b border-lighterGray'>
              <div>
                <h2 className='text-xl md:text-2xl font-bold mb-4'>Product</h2>
                {cartItems.map((item) => (
                  <div key={item.id} className='mb-4 flex'>
                    <p className='font-medium text-lightGray text-base'>{item.title}</p>
                    <p className='font-sm text-graphite text-sm ml-2'>x {item.quantity}</p>
                  </div>
                ))}
                <p className='font-semibold mt-4'>Total:</p>
              </div>
              <div className='text-right'>
                <h2 className='text-xl md:text-2xl font-bold mb-2'>Subtotal</h2>
                {cartItems.map((item) => (
                  <p key={item.id} className='mb-4'>Rp {calculateSubtotal(item.salePrice, item.quantity).toFixed(2)}</p>
                ))}
                <p className='mt-4 text-golden text-lg md:text-2xl font-semibold'>Rp {total.toFixed(2)}</p>
              </div>
            </div>

            <div className='mt-8 p-4'>
              <div>
                <label className='block'>
                  <input
                    type='radio'
                    value='bankTransfer'
                    checked={selectedOption === 'bankTransfer'}
                    onChange={() => handleOptionChange('bankTransfer')}
                    className='mr-2'
                    style={{ accentColor: 'black' }}
                  />
                  <span className={selectedOption === 'bankTransfer' ? 'text-black' : 'text-lightGray'}>
                    Direct Bank Transfer
                  </span>
                </label>
                {selectedOption === 'bankTransfer' && (
                  <div className='mt-2 p-2 bg-gray-100'>
                    <p className='text-lightGray'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                  </div>
                )}
              </div>
              <div className='mt-4'>
                <label className='block'>
                  <input
                    type='radio'
                    value='cashOnDelivery'
                    checked={selectedOption === 'cashOnDelivery'}
                    onChange={() => handleOptionChange('cashOnDelivery')}
                    className='mr-2'
                    style={{ accentColor: 'black' }}
                  />
                  <span className={selectedOption === 'cashOnDelivery' ? 'text-black' : 'text-lightGray'}>
                    Cash on Delivery
                  </span>
                </label>
                {selectedOption === 'cashOnDelivery' && (
                  <div className='mt-2 p-2 bg-gray-100'>
                    <p className='text-lightGray'>Pay with cash upon delivery.</p>
                  </div>
                )}
              </div>
              <p className='mt-2 text-center' style={{ textAlign: 'justify' }}>
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy</b>.
              </p>
              <div className='flex justify-center'>
                <button 
                  className='mt-4 font-semibold border border-black w-full md:w-2/4 h-[45px] rounded'
                  onClick={handlePlaceOrder}
                >
                  Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner />
      <Footer />
    </div>
  )
}

export default Checkout