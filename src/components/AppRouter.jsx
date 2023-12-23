import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context);
    return (
        <Routes>
            {
                publicRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={<route.component/>}/>
                )
            }
            <Route path='/*' element={<Navigate to='/'/>}/>
        </Routes>
    );
});

export default AppRouter;