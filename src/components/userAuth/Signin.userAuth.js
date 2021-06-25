import React, { useState } from 'react';
import service from '../../services/axios.services';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SigninElements';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e)=>{
        
        console.log('email', email);
        console.log('password', password);
        
        e.preventDefault();
        
        service.userLogin({email,password})
        .then( (responseFromServer)=>{
            console.log(responseFromServer);
        })

    }


    return (
        <>
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
                            <FormButton type='Submit'>Sign Up</FormButton>
                            <Text>Forgot Password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default SignIn;