import React, { useState, useEffect, useCallback } from 'react'
import { IProducts } from '../types/Products'
import filter from '../assets/filter.svg'
import grid from '../assets/grid.svg'
import list from '../assets/list.svg'

interface FilterProps {
  products: IProducts[]
  onFilter: (filteredProducts: IProducts[]) => void
}

const Filter: React.FC<FilterProps> = ({ products, onFilter }) => {
  const [resultsPerPage, setResultsPerPage] = useState<number>(8)
  const [sortBy, setSortBy] = useState<string>('default')
  const [currentPage, setCurrentPage] = useState<number>(1)

  const handleResultsPerPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResultsPerPage(parseInt(e.target.value, 10))
    setCurrentPage(1)
  }

  const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value)
  }

  const getFilteredProducts = useCallback(() => {
    const filteredProducts = [...products]
    if (sortBy === 'category') {
      filteredProducts.sort((a, b) => a.category.localeCompare(b.category))
    }
    return filteredProducts
  }, [sortBy, products])

  const paginateProducts = useCallback((filteredProducts: IProducts[]) => {
    const startIndex = (currentPage - 1) * resultsPerPage
    return filteredProducts.slice(startIndex, startIndex + resultsPerPage)
  }, [currentPage, resultsPerPage])

  useEffect(() => {
    const filteredProducts = getFilteredProducts()
    const paginatedProducts = paginateProducts(filteredProducts)
    onFilter(paginatedProducts)
  }, [resultsPerPage, sortBy, currentPage, products, getFilteredProducts, paginateProducts, onFilter])

  const filteredProducts = getFilteredProducts()
  const startIndex = (currentPage - 1) * resultsPerPage
  const endIndex = startIndex + resultsPerPage

  return (
    <div className="bg-cream w-full flex justify-center items-center md:h-[100px] font-poppins">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-screen-lg p-4">
        <div className="flex flex-row justify-center items-center p-2">
          <div className="flex justify-center items-center border-r border-lightGray p-2">
            <img src={filter} className="mr-2 md:w-[25px] md:mr-2" alt="Filter" />
            <p>Filter</p>
            <img src={grid} className="ml-2 md:w-[25px] md:ml-4" alt="Grid" />
            <img src={list} className="ml-2 mr-2 md:w-[25px] md:ml-4 md:mr-4" alt="List" />
          </div>
          <span className="ml-2 md:ml-4 md:mr-4">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} results
          </span>
        </div>
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 mt-4 md:mt-0">
          <div className="flex items-center mb-2 md:mb-0">
            <label htmlFor="resultsPerPage" className="mr-2">Show</label>
            <input
              id="resultsPerPage"
              type="number"
              value={resultsPerPage}
              onChange={handleResultsPerPageChange}
              className="p-2 w-[50px] text-lightGray"
              min="1"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="sortBy" className="mr-2">Sort by</label>
            <select
              id="sortBy"
              value={sortBy}
              onChange={handleSortByChange}
              className="p-2 text-lightGray"
            >
              <option value="default">Default</option>
              <option value="category">Category</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
