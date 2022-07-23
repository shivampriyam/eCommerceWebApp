import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './../redux/apiCalls';

const Container = styled.div`
    display: flex; justify-content: center; align-items: center; flex-direction: column;
`
const Username = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 10px 0px;
`
const Input = styled.input`
    padding: 5px;
    border: 1px solid gray;
    outline: none;
`
const Password = styled.div`
    margin: 10px 0px;
`
const Button = styled.button`
    margin: 10px 0px;
    padding: 10px;
    background: teal;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    &:disabled{
        color: green;
        cursor: not-allowed;
    }
`
const Error = styled.span`
    color: red;
    padding: 10px ;
    display: flex;
    text-align:center;
`

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    const handleClick= (e)=>{
        e.preventDefault();
        login(dispatch, { username, password })
    }

    return <Container>
        <Username>
            Username: <Input placeholder="Enter the username" onChange={(e)=> setUsername(e.target.value)} />
        </Username>
        <Password>
            Password: <Input type='password' placeholder='Enter password' onChange={(e)=> setPassword(e.target.value)} />
        </Password>
        <Button onClick={handleClick} disabled={isFetching} >Sign in</Button>
        {error && <Error>Something went wrong.....</Error>}
    </Container>;
};

export default Register;
