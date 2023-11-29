import React, {useEffect} from 'react';
import axios from "axios";
import {login} from "../http/UserAPI";
import {useNavigate} from "react-router-dom";
import {REGISTRATION_ROUTE} from "../utils/consts";

function LoginComponent() {
    let data;
    const navigate = useNavigate();

    const auth = async (code) => {
        try {
            data = await login(code);
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        auth(code).then(() => navigate(REGISTRATION_ROUTE))
    }, []);

    return (
        <div>
        </div>
    );
}

export default LoginComponent;
