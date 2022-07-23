import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from '../components/Product'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const ProductItem = ({ cat, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredproducts, setFilteredProducts] = useState([]);

    useEffect(()=>{
        const getProducts = async ()=>{
            try {
                const res = await axios.get( "https://mysterious-harbor-84596.herokuapp.com/api/products/", {Header:{authToken:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjFmNDZlZDUyOTJlMTMzZmNiMDBkNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTQwMjExNCwiZXhwIjoxNjM5NjYxMzE0fQ.UKKP9-5Y9fRXoOC1an2luZ9Xz4pUnm6VxoR5G0Qc4AA"}});
                // const res = await axios.get(cat ? `http://localhost:5000/api/products/?category=${cat}` : "https://mysterious-harbor-84596.herokuapp.com/api/products/", {Header:{authToken:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjFmNDZlZDUyOTJlMTMzZmNiMDBkNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTQwMjExNCwiZXhwIjoxNjM5NjYxMzE0fQ.UKKP9-5Y9fRXoOC1an2luZ9Xz4pUnm6VxoR5G0Qc4AA"}});
                setProducts(res.data);
            } catch (err) { }
        }
        getProducts();
    }, [cat]);

    useEffect (()=>{
        cat && setFilteredProducts(
            products.filter((item)=>
                Object.entries(filters).every(([key,value])=>
                    item[key].includes(value)
                )
            )
        );
    }, [products, cat, filters]);

    useEffect (()=>{
        if(sort === "newest"){
            setFilteredProducts((prev)=>
                [...prev].sort((a,b) => a.createdAt-b.createdAt)
            );
        }else if(sort === "asc"){
            setFilteredProducts((prev)=>
                [...prev].sort((a,b) => a.price-b.price)
            );
        }else{
            setFilteredProducts((prev)=>
                [...prev].sort((a,b) => b.price-a.price)
            );
        }
    }, [sort]);

    console.log(filteredproducts);

    return (
        <Container>
            {cat ? filteredproducts.map((item)=>(<Product item={item} key={item._id} />))
            : products.slice(0,8).map((item)=>(<Product item={item} key={item._id} />))}
        </Container>
    )
}

export default ProductItem
