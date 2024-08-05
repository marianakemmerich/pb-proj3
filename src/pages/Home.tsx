import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import dining from '../assets/dining.png'
import living from '../assets/living-room.png'
import bedroom from '../assets/bedroom.png'
import furniture from '../assets/furniture.png'
import ProductCard from '../components/ProductCard'
import { fetchProducts } from '../api/apiService'
import { IProducts } from '../types/Products'
import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
    const [products, setProducts] = useState<IProducts[]>([])

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts()
            setProducts(data.slice(0, 8))
        }

        getProducts()
    }, [])

    const navigate = useNavigate()

    const handleShowMoreClick = () => {
        navigate('/shop');
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Hero />
            <main className="flex-1">
                <div className='w-full font-poppins flex items-center justify-center'>
                    <div className='w-full max-w-[1183px] flex flex-col items-center'>
                        <h1 className='text-center text-3xl text-graphite font-bold mt-8 mb-8'>
                            Browse The Range
                        </h1>
                        <p className='text-center text-lg text-lightGraphite mb-8'>
                            Discover a wide array of products tailored to meet all your needs.
                        </p>
                        <div className='flex flex-col md:flex-row justify-around w-full md:w-[90%] mx-auto gap-8'>
                            <div className='flex flex-col items-center mb-8 md:mb-0'>
                                <a href="#">
                                    <img
                                        src={dining}
                                        alt="Dining room"
                                        className='w-full max-w-[381px] h-auto mb-4'
                                    />
                                </a>
                                <p>Dining</p>
                            </div>
                            <div className='flex flex-col items-center mb-8 md:mb-0'>
                                <a href='#'>
                                    <img
                                        src={living}
                                        alt="Living room"
                                        className='w-full max-w-[381px] h-auto mb-4'
                                    />
                                </a>
                                <p>Living</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <a href="#">
                                    <img
                                        src={bedroom}
                                        alt="Bedroom"
                                        className='w-full max-w-[381px] h-auto mb-4'
                                    />
                                </a>
                                <p>Bedroom</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex items-center justify-center mt-8'>
                    <div className='w-full max-w-[1236px] flex flex-col items-center'>
                        <h1 className='text-center text-3xl text-graphite font-bold mb-4'>
                            Our Products
                        </h1>
                        <div className="flex justify-center mx-auto p-4">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                {products.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                    />
                                ))}
                            </div>
                        </div>
                        <button
                            onClick={handleShowMoreClick}
                            className='w-[245px] h-[48px] mt-4 border border-golden text-golden text-base font-poppins font-semibold'
                        >
                            Show More
                        </button>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center font-poppins mt-12'>
                    <p className='text-center text-lg text-lighterGraphite font-semibold'>
                        Share your setup with
                    </p>
                    <h1 className='text-center text-3xl text-darkGraphite font-bold'>
                        #FuniroFurniture
                    </h1>
                    <img
                        src={furniture}
                        alt="Furniture"
                        className='w-full mt-4 mb-12'
                    />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Home
