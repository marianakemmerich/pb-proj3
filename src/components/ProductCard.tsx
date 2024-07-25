import React from 'react';
import { IProducts } from '../types/Products';

interface ProductCardProps {
  product: IProducts;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="w-[285px] h-[446px] overflow-hidden bg-ice p-0 flex flex-col justify-between">
        <div>
            <img className="w-full h-[301px] object-cover border border-ice" src={product.images.mainImage} alt={product.title} />
            <div className="px-4 py-2">
                <div className="text-left text-darkGraphite font-poppins font-semibold text-lg mb-4">{product.title}</div>
                <p className="text-darkGray text-sm font-poppins">{product.description.short}</p>
            </div>
        </div>
        <div className="px-4 pt-2 pb-2 flex justify-between">
            <span className="font-poppins text-lg text-darkGraphite font-semibold">Rp {product.salePrice}</span>
            <span className="text-right line-through text-gray text-sm ml-2">Rp {product.normalPrice}</span>
        </div>
    </div>

  );
};

export default ProductCard;

