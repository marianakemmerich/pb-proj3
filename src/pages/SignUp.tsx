import Register from '../components/Register'
import Header from '../components/Header'
import logo from '../assets/furniro-icon.svg'
import cover from '../assets/signup-background.jpeg'

const SignUp = () => {
  return (
    <div>
      <Header />
      <div className='flex flex-col md:flex-row w-full'>
        <div
          className='relative overflow-hidden hidden md:flex items-center justify-center w-full md:w-3/5'
          style={{
            backgroundImage: `linear-gradient(to right, rgba(250, 243, 234, 0.6) 40%, #faf3ea 100%), url(${cover})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backdropFilter: 'blur(30px)',
          }}
        >
          <div className='relative z-10 text-black text-center'>
            <img src={logo} className='w-[200px] mx-auto mb-4' />
            <p className='font-poppins text-4xl md:text-5xl font-bold'>Furniro</p>
          </div>
        </div>
        <div className='w-full md:w-2/5 flex items-center justify-center bg-cream'>
          <div className='flex flex-col items-center p-6 max-h-full overflow-auto'>
            <Register />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp