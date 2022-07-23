import { Call, Facebook, Instagram, LocationCity, MailOutline, Twitter, WhatsApp } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: lightyellow;
`
const SocialMediaContainer = styled.div`
    flex: 1;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
`
const Title = styled.h1`
    margin-top: 10px;
`
const Desc = styled.p``
const SocialMediaicons = styled.div``

const Center = styled.div`
    flex: 1;
`
const ListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`
const ListItems = styled.li`
    margin: 0; padding: 0;
    flex: 1;
    list-style: none;
`
const ContactContainer = styled.div`
    flex: 1;
`
const Location = styled.div``
const Contact = styled.div``
const MailContainer = styled.div``
const AdressContainer = styled.div``

const Footer = () => {
    return (
        <Container>
            <SocialMediaContainer>
                <Title>eCom</Title>
                <Desc>Don't compromise with the quality</Desc>
                <SocialMediaicons>
                    <Facebook />
                    <Twitter />
                    <Instagram />
                    <WhatsApp />
                </SocialMediaicons>
            </SocialMediaContainer>
            <Center>
                <Title>Useful Links</Title>
                <ListContainer>
                    <ListItems>Home</ListItems>
                    <ListItems>Cart</ListItems>
                    <ListItems>Man Fashion</ListItems>
                    <ListItems>Woman Fashion</ListItems>
                    <ListItems>Accessories</ListItems>
                    <ListItems>My Account</ListItems>
                    <ListItems>Order Tracking</ListItems>
                    <ListItems>WishList</ListItems>
                    <ListItems>Terms</ListItems>
                </ListContainer>
            </Center>
            <ContactContainer>
                <Title>Contact</Title>
                <Location>
                    <LocationCity/>
                    <Title></Title>
                </Location>
                <Contact>
                    <Call/>
                    <Title></Title>
                </Contact>
                <MailContainer>
                    <MailOutline/>
                    <Title></Title>
                </MailContainer>
                <AdressContainer>Payment</AdressContainer>
            </ContactContainer>
        </Container>
    )
}

export default Footer
