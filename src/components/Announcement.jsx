import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 5vh;
    background: teal;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
    font-size: 20px;
    font-weight: 200;
    letter-spacing: 1px;
    color: yellow;
`


const Announcement = () => {
    return (
        <Container>
            <Title>Huury up! 35% offers on clothes....</Title>
        </Container>
    )
}

export default Announcement
