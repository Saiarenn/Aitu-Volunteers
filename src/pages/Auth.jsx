import React from 'react';
import {Button, Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const Auth = () => {
    const navigate = useNavigate()
    return (
        <Container className="d-flex justify-content-center align-items-center"
                   style={{height: window.innerHeight - 54}}>
            <a
                href={('https://login.microsoftonline.com/158f15f3-83e0-4906-824c-69bdc50d9d61/oauth2/v2.0/authorize?client_id=8e43eadc-4f43-4434-b074-7dd9b8d46468&response_type=code&redirect_uri=http%3A%2F%2Flocalhost:3000%2Flogin&response_mode=query&scope=openid&state=12345')}>
                Open ID
            </a>
        </Container>
    );
};

export default Auth;