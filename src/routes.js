import {
    AUTH_ROUTE, HOME_ROUTE, LOGIN_ROUTE,
    REGISTRATION_ROUTE,
} from "./utils/consts";
import Auth from "./pages/Auth";
import Registration from "./pages/Registration";
import LoginComponent from "./pages/LoginComponent";
import Home from "./pages/Home";

export const publicRoutes = [
    {
        path: AUTH_ROUTE,
        component: Auth,
    },
    {
        path: LOGIN_ROUTE,
        component: LoginComponent,
    },
    {
        path: REGISTRATION_ROUTE,
        component: Registration,
    },
    {
        path: HOME_ROUTE,
        component: Home,
    },
]

export const authRoutes = [

]