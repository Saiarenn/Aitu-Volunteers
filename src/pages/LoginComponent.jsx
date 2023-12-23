import React, {useEffect} from 'react';
import {check, login} from "../http/UserAPI";
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

function LoginComponent() {
    let data;
    const navigate = useNavigate();

    const auth = async (code) => {
        try {
            data = await login(code);
            await check().then(() => navigate(HOME_ROUTE));
        } catch (error) {
            if (error.response && error.response.status === 403) {
                navigate(REGISTRATION_ROUTE);
            } else {
                console.log(error);
            }
        }
    };


    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        auth(code)
    }, []);

    return (
        <div>
        </div>
    );
}

export default LoginComponent;
