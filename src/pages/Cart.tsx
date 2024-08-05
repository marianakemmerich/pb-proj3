import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TopBanner from '../components/TopBanner'
import { ICartProduct } from '../types/Products'
import deleteIcon from '../assets/delete.svg'

const Cart = () => {
  const navigate = useNavigate()

  const handleCheckout = () => {
    navigate('/checkout')
  }

  const [cartItems, setCartItems] = useState<ICartProduct[]>([])

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCartItems(cart)
  }, [])

  const calculateSubtotal = (price: number, quantity: number) => price * quantity

  const handleRemoveItem = (id: number) => {
    const updatedCart = cartItems.filter(item => item.id !== id)
    setCartItems(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  const handleQuantityChange = (id: number, change: number) => {
    const updatedCart = cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    )
    setCartItems(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  const total = cartItems.reduce((acc, item) => acc + calculateSubtotal(item.salePrice, item.quantity), 0)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <TopBanner title='Cart' section='Cart' />
      <div className='bg-white flex-grow flex flex-col md:flex-row justify-center items-start py-0 md:py-8'>
      <div className='w-full max-w-4xl mx-auto flex flex-col items-center mb-8 md:mb-0'>
  <div className='bg-cream w-full h-[55px] grid grid-cols-5 items-center justify-around font-poppins font-semibold text-base'>
    <p className='text-center'>Product</p>
    <p className='md:hidden text-center'></p>
    <p className='hidden md:block text-center'>Price</p>
    <p className='text-center'>Quantity</p>
    <p className='text-center'>Subtotal</p>
  </div>
  {cartItems.map((item) => (
    <div key={item.id} className='w-full grid grid-cols-5 items-center justify-between py-2 font-poppins'>
      <div className='flex items-center col-span-2 md:col-span-1'>
        <img src={item.images.mainImage} className='ml-4 w-[80px] h-[80px] object-cover rounded'/>
        <p className='hidden md:block text-lightGray ml-2 text-sm'>{item.title}</p>
      </div>
      <p className='hidden md:block text-center text-sm'>Rp {item.salePrice.toFixed(2)}</p>
      <div className='w-[80px] h-[35px] bg-white border border-darkGray rounded flex items-center justify-center'>
        <button 
          onClick={() => handleQuantityChange(item.id, -1)} 
          className='bg-gray-200 p-1 rounded text-sm'
        >
          -
        </button>
        <p className='mx-2 text-sm'>{item.quantity}</p>
        <button 
          onClick={() => handleQuantityChange(item.id, 1)} 
          className='bg-gray-200 p-1 rounded text-sm'
        >
          +
        </button>
      </div>
      <p className='text-center text-sm'>Rp {calculateSubtotal(item.salePrice, item.quantity).toFixed(2)}</p>
      <div className='flex items-center justify-center'>
        <button onClick={() => handleRemoveItem(item.id)}>
          <img src={deleteIcon} className='w-[24px]'/>
        </button>
      </div>
    </div>
  ))}
</div>

        <div className='bg-cream w-4/5 ml-12 md:mr-12 mb-8 md:w-[393px] min-h-[390px] flex flex-col items-center'>
          <h2 className='mt-8 text-center text-2xl font-bold'>Cart Totals</h2>
          <div className='w-full px-4 flex flex-col mt-4'>
            <p className='text-left text-base font-semibold mb-2'>Subtotal:</p>
            {cartItems.map((item) => (
              <p key={item.id} className='text-base text-right text-lightGray'>Rp {calculateSubtotal(item.salePrice, item.quantity).toFixed(2)}</p>
            ))}
            <div className='flex justify-between mt-4'>
              <p className='font-semibold'>Total:</p>
              <p className='text-xl text-golden font-semibold'>Rp {total.toFixed(2)}</p>
            </div>
          </div>
          <button
            onClick={handleCheckout}
            className='w-1/3 md:w-[222px] h-[59px] bg-none border border-graphite rounded mt-8 mb-8 py-2 text-lg font-semibold'
          >
            Check Out
          </button>
        </div>
      </div>
      <Banner />
      <Footer />
    </div>
  )
}

export default Cart