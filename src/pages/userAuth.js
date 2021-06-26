import React from 'react';
import SignIn from '../components/userAuth/Signin.userAuth';
import ScrollToTop from '../components/ScrollToTop';

function SignInPage() {
    return (
        <>
            <ScrollToTop />
            <SignIn />
        </>
    );
}

export default SignInPage;