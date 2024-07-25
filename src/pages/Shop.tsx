import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import TopBanner from '../components/TopBanner'
import ProductCard from '../components/ProductCard'
import { fetchProducts } from '../api/apiService'
import { IProducts } from '../types/Products'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Shop: React.FC = () => {
        const [products, setProducts] = useState<IProducts[]>([])
    
        useEffect(() => {
            const getProducts = async () => {
            const data = await fetchProducts()
            setProducts(data.slice(0, 16))
            }
    
            getProducts()
        }, [])

  return (
    <div>
        <Header />
        <TopBanner title='Shop' section='Shop' />
        <div className='flex flex-col items-center w-full min-h-screen py-8'>
                <div className='container mx-auto p-4'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                </div>
                <div className='font-poppins text-lg flex justify-center mt-8 mb-12 space-x-4'>
                    <button className='bg-cream w-[50px] h-[50px] px-4 py-2 bg-gray-200 rounded'>1</button>
                    <button className='bg-cream w-[50px] h-[50px] px-4 py-2 bg-gray-200 rounded'>2</button>
                    <button className='bg-cream w-[50px] h-[50px] px-4 py-2 bg-gray-200 rounded'>3</button>
                    <button className='bg-cream w-[88px] h-[50px] px-4 py-2 bg-gray-200 rounded'>Next</button>
                </div>
            </div>
        <Banner />
        <Footer />
    </div>
  )
}


export default Shop