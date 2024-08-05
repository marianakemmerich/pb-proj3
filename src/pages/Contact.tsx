import Header from '../components/Header'
import TopBanner from '../components/TopBanner'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import loc from '../assets/loc.svg'
import phone from '../assets/phone.svg'
import clock from '../assets/clock.svg'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div>
      <Header />
      <TopBanner title='Contact' section='Contact' />
      <div className='font-poppins'>
        <div className='p-12'>
          <h1 className='text-center text-3xl font-bold mt-12'>Get In Touch With Us</h1>
          <p className='text-center text-lightGray mt-4 mb-8'>
            For More Information About Our Product & Services. Please Feel Free To Drop Us <br />
            An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
          <div className='flex flex-col md:flex-row mt-12'>
            <div className='w-full md:w-1/3 ml-0 md:ml-12 p-4'>
              <div className='mb-8'>
                <div className='flex items-center space-x-2'>
                  <img src={loc} className='w-[22px] mr-4'/>
                  <p className='text-xl md:text-2xl font-bold'>Address</p>
                </div>
                <p className='text-sm ml-0 md:ml-12'>236 5th SE Avenue, New <br /> York NY10000, United <br /> States</p>
              </div>
              <div className='mb-8'>
                <div className='flex items-center space-x-2'>
                  <img src={phone} className='w-[30px] mr-4'/>
                  <p className='text-xl md:text-2xl font-bold'>Phone</p>
                </div>
                <p className='text-sm ml-0 md:ml-14'>
                  Mobile: +(84) 546-6789 <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
              <div className='mb-4'>
                <div className='flex items-center space-x-2'>
                  <img src={clock} className='w-[30px] mr-4'/>
                  <p className='text-xl md:text-2xl font-bold'>Working Time</p>
                </div>
                <p className='text-sm ml-0 md:ml-14'>
                  Monday-Friday: 9:00 - 22:00 <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
            <div className='w-full md:w-2/3 mr-0 md:mr-8'>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Banner />
      <Footer />
    </div>
  )
}

export default Contact
