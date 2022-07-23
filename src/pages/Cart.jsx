import React, {useState} from 'react'
import styled from 'styled-components'
import Navbar from './../components/Navbar';
import Announcement from './../components/Announcement';
import Footer from './../components/Footer';
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

const KEY = 'pk_test_51Jse9aSFPlTtLpuJhfk8oiBs29p6s2X8PyrC2Oe5iok9vekgAhQQIQzOobdIpJsDgyyrVkRBujTBMjKz1Nmrwr2j002bnl1fIn';

const Container = styled.div``
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const Title = styled.h1`
    text-align: center;
`
const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
`
const Continue = styled.button`
    padding: 5px;
`
const Center = styled.div`
    display: flex;
`
const Checkout = styled.button`
    padding: 5px;
    color: white;
    background: black;
`
const Summary = styled.div`
    display: flex;
`
const ProductSummary = styled.div`
    display: flex;
    flex-direction: column;
`
const ProductItem = styled.div`
    display: flex;
`
const ProductImage = styled.div`
    height:200px;
    width:200px;
    border: 1px solid black;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
`
const ProductInfo = styled.div``
const ProductName = styled.div`
    display: flex;
`
const ProductNameTitle = styled.h1``
const ProductId = styled.div`
    display: flex;
`
const ProductIdTitle = styled.h1``
const ProductColor = styled.div``
const ProductSize = styled.div``
const ProductQuantity = styled.div``
const OrderSummary = styled.div`
    display: flex;
    flex-direction: column;
`

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const [stripeToken, setStripeToken] = useState(null);

    const onToken = (token)=>{
        setStripeToken(token);
    }

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>Your Bag</Title>
                <Buttons>
                    <Continue>Continue Shopping</Continue>
                    <Center>
                        <p>Shopping Bag(2)</p>
                        <p>Your Wishlist(0)</p>
                    </Center>
                    <StripeCheckout
                        name= "eShop"
                        image=""
                        billingAddress
                        shippingAddress
                        description={`Your total is Rs ${cart.total}`}
                        amount={cart.total*100 + 100}
                        token={onToken}
                        stripeKey={KEY}
                    >
                        <Checkout>Checkout Now</Checkout>
                    </StripeCheckout>
                </Buttons>
                <Summary>
                    <ProductSummary>
                        {cart.products.map((product) => (
                            <ProductItem>
                                <ProductImage>
                                    <Image src={product.img} />
                                </ProductImage>
                                <ProductInfo>
                                    <ProductName>
                                        <ProductNameTitle>Product: </ProductNameTitle>
                                        <p>{product.title}</p>
                                    </ProductName>
                                    <ProductId>
                                        <ProductIdTitle>Product Id: </ProductIdTitle>
                                        <p>{product._id}</p>
                                    </ProductId>
                                    <ProductColor> {product.color}</ProductColor>
                                    <ProductSize> {product.size}</ProductSize>
                                </ProductInfo>
                                <ProductQuantity> {product.quantity}</ProductQuantity>
                            </ProductItem>))}
                    </ProductSummary>
                    <OrderSummary>{cart.total}</OrderSummary>
                </Summary>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart
