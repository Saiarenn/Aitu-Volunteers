import {
    AUTH_ROUTE, LOGIN_ROUTE,
    REGISTRATION_ROUTE,
} from "./utils/consts";
import Auth from "./pages/Auth";
import Registration from "./pages/Registration";
import LoginComponent from "./pages/LoginComponent";

export const publicRoutes = [
    {
        path: AUTH_ROUTE,
        component: Auth,
    },
    {
        path: REGISTRATION_ROUTE,
        component: Registration,
    },
    {
        path: LOGIN_ROUTE,
        component: LoginComponent,
    }
]