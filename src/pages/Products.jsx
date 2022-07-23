import React, { useState } from 'react'
import ProductItem from './ProductItem'
import Navbar from './../components/Navbar';
import styled from 'styled-components';
import Announcement from './../components/Announcement';
import Newsletter from './../components/Newsletter';
import Footer from './../components/Footer';
import { useLocation } from 'react-router-dom';

const Container = styled.div``
const Title = styled.h1``
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    display: flex;
`
const FilterTitle = styled.h2``
const FilterColor = styled.select`
    margin-left: 10px;
`
const FilterSize = styled.select`
    margin-left: 10px;
`
const Color = styled.option``
const Size = styled.option``
const SortContainer = styled.select``
const Sort = styled.option``

const Products = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [ filters, setFilter ] = useState({});
    const [ sort, setSort ] = useState("");

    const handleFilter = (e)=>{
        const value = e.target.value;
        setFilter({
            ...filters,
            [e.target.name] : value
        });
    };

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Category</Title>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Filter Products: </FilterTitle>
                    <FilterColor name='color' onChange={handleFilter}>
                        <Color>red</Color>
                        <Color>blue</Color>
                        <Color>black</Color>
                    </FilterColor>
                    <FilterSize name='size' onChange={handleFilter}>
                        <Size>XS</Size>
                        <Size>S</Size>
                        <Size>M</Size>
                        <Size>L</Size>
                        <Size>XL</Size>
                        <Size>XXL</Size>
                    </FilterSize>
                </Filter>
                <SortContainer onChange={e => setSort(e.target.value)}>
                    <Sort value="newest">Newest</Sort>
                    <Sort value="asc">Price (asc)</Sort>
                    <Sort value="desc">Price (desc)</Sort>
                </SortContainer>
            </FilterContainer>
            <ProductItem cat={cat} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Products
