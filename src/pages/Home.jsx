import React from 'react'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import Navbar from './../components/Navbar';
import ProductItem from './ProductItem';

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <ProductItem />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home
