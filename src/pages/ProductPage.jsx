import { AddOutlined, RemoveOutlined } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from './../components/Navbar';
import Announcement from './../components/Announcement';
import Footer from './../components/Footer';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';

const Container = styled.div`
    display: flex;
`
const ImageContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    /* flex: 1; */
    padding: 10px;
    height: 400px;
    width: 400px;
`
const InfoContainer = styled.div`
    flex: 1;
`
const Title = styled.h1`
    margin: 10px 0;
`
const Desc = styled.p`
    margin: 10px 0;
`
const Price = styled.span`
    margin: 10px 0;
`
const SelectContainer = styled.div`
    display: flex;
`
const SelectColor = styled.div`
    display: flex;
    flex: 1;
`
const Color = styled.div`
    height: 20px;
    width: 20px;
    margin-right: 10px;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid black;
    background: ${(props)=> props.color};
`
const SelectSize = styled.select`
    flex: 1;
`
const Size = styled.option``
const AddProduct = styled.div`
    margin: 20px 0;
    display: flex;
`
const ProductQuantity = styled.div`
    margin: 20px 0;
    display: flex;
`
const Icon = styled.div``
const Quantity = styled.div``
const Button = styled.button`
    padding: 8px;
    height: 40px;
`

const ProductPage = () => {
    const [product, setProduct ] = useState({})
    const prodId = useLocation().pathname.split("/")[2];
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();

    const handleQuantity = (type)=>{
        if(type==="inc"){
            setQuantity(quantity+1);
        }else{
            quantity>1 && setQuantity(quantity-1);
        }
    };
    const handleClick = ()=>{
        dispatch(addProduct({ product, quantity, color, size}));
        console.log(product, size, color, quantity);
    }

    useEffect (()=>{
        const getProduct = async ()=>{
            try{
                // const res = await axios.get(`http://localhost:5000/api/products/find/${prodId}`);
                const res = await axios.get(`https://mysterious-harbor-84596.herokuapp.com/api/products/find/${prodId}`);
                setProduct(res.data);
                // console.log(res.data);
            }catch(err){}
        };
        getProduct();
    }, [prodId])

    return (
        <>
        <Navbar />
        <Announcement />
        <Container>
            <ImageContainer>
                <Image src={product.img} />
            </ImageContainer>
            <InfoContainer>
                <Title> {product.title} </Title>
                <Desc> {product.desc} !</Desc>
                <Price>Rs  {product.price} </Price>

                <SelectContainer>
                    <SelectColor>
                        { product.color?.map((c)=>(
                            <Color color={c} key={c} onClick={()=> setColor(c)}/>
                        ))}
                    </SelectColor>
                    <SelectSize onChange={(e)=> setSize(e.target.value)}>
                        { product.size?.map((s)=>(
                            <Size key={s} > {s} </Size>
                        ))}
                    </SelectSize>
                </SelectContainer>

                <AddProduct>
                    <ProductQuantity>
                        <Icon onClick={()=>handleQuantity("dec")}>
                            <RemoveOutlined />
                        </Icon>
                        <Quantity>{quantity}</Quantity>
                        <Icon onClick={()=>handleQuantity("inc")}>
                            <AddOutlined />
                        </Icon>
                    </ProductQuantity>
                    <Button onClick={handleClick}>Add to cart</Button>
                </AddProduct>
            </InfoContainer>
        </Container>
        <Footer />
        </>
    )
}

export default ProductPage
