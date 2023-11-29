import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes} from "../routes";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context);

    return (
        <Routes>
            {publicRoutes.map(route =>
                <Route key={route.path} path={route.path} element={<route.component />}/>
            )}
            {/*<Route path='/*' element={<Navigate to='/auth'/>}/>*/}
        </Routes>
    );
};

export default AppRouter;