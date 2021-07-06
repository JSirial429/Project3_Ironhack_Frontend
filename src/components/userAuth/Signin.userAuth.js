import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import service from '../../services/axios.services';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SigninElements';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(false);

    const history = useHistory();

    const signIn = async (e)=>{
        
        
        e.preventDefault();
        
        service.userLogin({email,password})
        .then( response =>{
            console.log('user is authenticated', response.data)
            setUser(response.data);
            console.log("Logged In User:", response.data);
            /* history.push("/dashboard"); */
            history.push({
                pathname:'/dashboard',
                state:{detail: response.data},
            })
            
        })
        .catch( err =>{
            console.log('user is not authenticated', err)
        })

        
    }


    return (
        <>
            {!user && 
            <Container>
                <FormWrap>
                    <Icon to='/'>Price Checker</Icon>
                    <FormContent>
                        <Form onSubmit={signIn}>
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required onChange={(e) => setEmail(e.target.value)} value={email} />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required onChange={(e)=> setPassword(e.target.value)} value={password}/>
                            <FormButton type='Submit'>Sign In</FormButton>
                            <Text>Forgot Password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>}
        </>
    );
};

export default SignIn;