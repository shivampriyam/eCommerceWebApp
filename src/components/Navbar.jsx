import { Badge } from '@material-ui/core'
import { ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    margin: 0;
    height: 60px;
    background: grey;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex; justify-content: space-between; align-items: center;

`
const Left = styled.div`
    flex: 1;
`
const Center = styled.div`
    flex: 1;
    font-size: 35px;
    font-weight: bold;
    text-align: center;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`
const Button = styled.button`
    padding: 5px;
    margin-right: 15px;
    font-size: 20px;
    background: black;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 5px;
`
const CartIcon = styled.div`
    cursor: pointer;
`

const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity);
    console.log(quantity);

    return (
        <Container>
            <Wrapper>
                <Left></Left>
                <Center>eCom</Center>
                <Right>
                    <Button>Sign in</Button>
                    <Button>Register</Button>
                    <Link to={`/cart`}>
                        <CartIcon>
                            <Badge badgeContent={quantity} color='primary'>
                                <ShoppingCartOutlined />
                            </Badge>
                        </CartIcon>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
