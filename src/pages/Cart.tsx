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
      <div className='bg-white flex-grow flex justify-center items-start py-8'>
        <div className='w-[817px] flex flex-col items-center'>
          <div className='bg-cream w-full h-[55px] grid grid-cols-5 items-center justify-around font-poppins font-semibold text-base'>
            <p className='text-center'>Product</p>
            <p className='text-center'>Price</p>
            <p className='text-center'>Quantity</p>
            <p className='text-center'>Subtotal</p>
          </div>
          {cartItems.map((item) => (
            <div key={item.id} className='w-full grid grid-cols-5 items-center justify-around py-2 font-poppins'>
              <div className='flex items-center justify-center'>
                <img src={item.images.mainImage} className='w-[100px] h-[100px] object-cover rounded'/>
                <p className='text-lightGray ml-2'>{item.title}</p>
              </div>
              <p className='text-center'>Rp {item.salePrice.toFixed(2)}</p>
              <div className='w-[100px] h-[47px] bg-white border border-darkGray rounded flex items-center justify-center ml-auto'>
                <button 
                  onClick={() => handleQuantityChange(item.id, -1)} 
                  className='bg-gray-200 p-1 rounded'
                >
                  -
                </button>
                <p className='mx-4'>{item.quantity}</p>
                <button 
                  onClick={() => handleQuantityChange(item.id, 1)} 
                  className='bg-gray-200 p-1 rounded'
                >
                  +
                </button>
              </div>
              <p className='text-center'>Rp {calculateSubtotal(item.salePrice, item.quantity).toFixed(2)}</p>
              <div className='flex items-center justify-center'>
                <button onClick={() => handleRemoveItem(item.id)}>
                  <img src={deleteIcon} className='w-[28px]'/>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className='bg-cream w-[393px] min-h-[390px] ml-8 flex flex-col items-center'>
          <h2 className='mt-8 text-center text-2xl font-bold'>Cart Totals</h2>
          <div className='w-2/3 mt-8 px-4 flex flex-col'>
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
            className='w-[222px] h-[59px] bg-none border border-graphite rounded mt-14 mb-8 py-2 text-lg font-semibold'
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
