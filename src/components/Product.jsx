import { FavoriteBorder, Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const InfoContiner = styled.div`
    position: absolute; background-color: rgba(0,0,0,0.2);
    width: 80%;
    height: 95%;
    opacity: 0;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    margin: 8px;
    width: 250px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: lightgray;
    border: 1px solid lightgray;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
    &:hover ${InfoContiner}{
        opacity: 1;
    }
`
const Circle = styled.div`
    width: 80%;
    height: 95%;
    background: white;
    border-radius: 5px;
    position: absolute;
`
const ProductImage = styled.img`
    height:90%;
    width: 180px;
    z-index: 2;
    position:relative;
`

const IconContainer = styled.div`
    margin-right: 6px;
    height: 40px;
    width: 40px;
    display: flex; align-items: center; justify-content: center;
    background: white;
    border-radius: 50%;
    border: 1px solid black;
    cursor: pointer;
`

const Product = ({item}) => {
    return (
        <Container>
            <Circle />
            <ProductImage src={item.img} />
            <InfoContiner>
                <IconContainer><ShoppingCartOutlined/></IconContainer>
                <IconContainer><Link to={`/product/${item._id}`}><Search /></Link></IconContainer>
                <IconContainer><FavoriteBorder /></IconContainer>
            </InfoContiner>
        </Container>
    )
}

export default Product
