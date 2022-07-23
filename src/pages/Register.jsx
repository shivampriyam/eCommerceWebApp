import React, {useState} from 'react';
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
    display: flex; justify-content: center; align-items: center; flex-direction: column;
`
const Username = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items:  flex-start;
    margin: 10px 0px;
`
const Input = styled.input`
    padding: 5px;
    border: 1px solid gray;
    outline: none;
`
const Email = styled.div`
    margin: 10px 0px;
`
const Password = styled.div`
    margin: 10px 0px;
`
const Button = styled.button`
    padding: 10px;
    background: blue;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
`

const Login = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = async (e)=>{
        e.preventDefault();
        const newUser = await axios.post("https://mysterious-harbor-84596.herokuapp.com/api/auth/register", {username,email,password})
        console.log(newUser);
    }
    return <Container>
        <Container>
            <Username>
                Username: <Input  onChange={(e)=>{setUsername(e.target.value)}} placeholder="Enter the username" /> 
            </Username>
            <Email>
                Email: <Input onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter email' /> </Email>
            <Password>
                Password: <Input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter password' /> 
            </Password>
        </Container>
        <Button onClick={handleClick}>Register</Button>
    </Container>;
};

export default Login;
