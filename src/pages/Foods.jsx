import { SearchOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import products from '../assets/fake-data/products'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection/CommonSection'
import FoodCard from '../components/UI/FoodCard/FoodCard'
import '../styles/Foods.css'

const Foods = () => {
    const [searchTerm, setSearchTerm] = useState('')
    // const [productData, setProductData] = useState(products)
    const searchedProduct = products.filter((item) => {
        if (searchTerm.value === '') return item;
        if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) return item
    })
    const [pageNumber, setPageNumber] = useState(0)
    const productPerPage = 8
    const visitedPage = pageNumber * productPerPage
    const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage)
    const pageCount = Math.ceil(searchedProduct.length / productPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }


    return (
        <Helmet title="All Foods">
            <CommonSection />
            <section className="">
                <div className="foods_section">
                    <div className="search_widget ">
                        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='p-2 ' type="text" placeholder="I am looking for ..." />
                        <span><SearchOutlined /></span>
                    </div>
                    <div className="sorting_widget">
                        <select className='p-2' name="" id="">
                            <option >Default</option>
                            <option value="ascending">Alphabetically, A-Z</option>
                            <option value="descending">Alphabetically, Z-A</option>
                            <option value="high-price">High Price</option>
                            <option value="low-price">Low Price</option>
                        </select>
                    </div>
                </div>
                <div className="all_food_section">
                    {
                        displayPage.map(item => <FoodCard key={item.id} item={item} />)
                    }
                </div>
                <div>
                    <ReactPaginate
                        breakLabel="..."
                        previousLabel="< Previous"
                        nextLabel="Next >"
                        onPageChange={changePage}
                        pageRangeDisplayed={5}
                        containerClassName='paginationButtons'
                        pageCount={pageCount}
                        renderOnZeroPageCount={null} />
                </div>

            </section>
        </Helmet>
    )
}

export default Foods
