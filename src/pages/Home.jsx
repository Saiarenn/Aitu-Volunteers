import React, {useEffect} from 'react';
import {check} from "../http/UserAPI";
import {useNavigate} from "react-router-dom";
import {AUTH_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Home = () => {

    const navigate = useNavigate();

    // useEffect(async () => {
    //     try {
    //         let data = await check()
    //         console.log(data)
    //     } catch (e) {
    //         if (e.response.status === 403) {
    //             navigate(REGISTRATION_ROUTE)
    //         }
    //     }}, [])

    return (
        <div>
            Home Page
            <button onClick={() => navigate(AUTH_ROUTE) }>Login</button>
        </div>
    );
};

export default Home;