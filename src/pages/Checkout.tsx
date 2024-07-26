import React from 'react'
import Header from '../components/Header'
import TopBanner from '../components/TopBanner'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Checkout = () => {
  return (
    <div>
        <Header />
        <TopBanner title='Checkout' section='Checkout' />
        <Banner />
        <Footer />
    </div>
  )
}

export default Checkout