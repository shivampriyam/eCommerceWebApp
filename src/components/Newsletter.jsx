import React from 'react'
import styled from 'styled-components'
import { SendOutlined } from '@material-ui/icons'

const Container = styled.div`
    height: 30vh;
    background: lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid black;
`
const InputContiner = styled.div`
    height: 40px;
    width: 50vw;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
`
const Input = styled.input`
    margin: 0;padding: 0px;height: 100%;
    padding-left: 5px;
    flex: 8;
    font-size: 18px;
    border: none;
    height: 100%;
`
const Button = styled.button`
    margin: 0;padding: 0;
    height: 100%;
    flex: 2px;
    font-size: 25px;
    display: flex; justify-content: center; align-items: center;
    background: teal;
    color: white;
    border: none;
    cursor: pointer;
`

const Newsletter = () => {
    return (
        <Container>
            <InputContiner>
                <Input placeholder='enter your email' />
                <Button><SendOutlined/></Button>
            </InputContiner>
        </Container>
    )
}

export default Newsletter
