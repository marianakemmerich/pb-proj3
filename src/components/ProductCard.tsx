import React, { useState } from 'react';
import { IProducts } from '../types/Products';
import share from '../assets/share.svg'
import compare from '../assets/compare.svg'
import like from '../assets/heart.svg'

interface ProductCardProps {
  product: IProducts;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-[285px] h-[446px] overflow-hidden bg-ice p-0 flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <img 
          className="w-full h-[301px] object-cover border border-ice" 
          src={product.images.mainImage} 
          alt={product.title} 
        />
        <div className="px-4 py-2">
          <div className="text-left text-darkGraphite font-poppins font-semibold text-lg mb-4">{product.title}</div>
          <p className="text-darkGray text-sm font-poppins">{product.description.short}</p>
        </div>
      </div>
      <div className="px-4 pt-2 pb-2 flex justify-between">
        <span className="font-poppins text-lg text-darkGraphite font-semibold">Rp {product.salePrice}</span>
        <span className="text-right line-through text-gray text-sm ml-2">Rp {product.normalPrice}</span>
      </div>
      {isHovered && (
        <div className="font-poppins absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center space-y-2">
        <button className="bg-white font-semibold text-golden w-4/5 px-4 py-2">Add to Cart</button>
        <div className="text-white text-base flex space-x-2">
          <a className="flex items-center px-2 py-1">
            <img src={share} className='w-[14px] mr-1' alt="Share" />Share
          </a>
          <a className='flex items-center px-2 py-1'>
            <img src={compare} className='w-[14px] mr-1' alt="Compare" />Compare
          </a>
          <a className='flex items-center px-2 py-1'>
            <img src={like} className='w-[14px] mr-1' alt="Like" />Like
          </a>
        </div>
      </div>
      )}
    </div>
  );
};

export default ProductCard;


