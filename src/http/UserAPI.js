import {$authHost, $host} from "./index";
import { jwtDecode } from "jwt-decode";

export const registration = async (firstname, lastname, gender, iin, phone) => {
    const { data } = await $authHost.post('api/v1/auth/registration', { firstname, lastname, gender, iin, phone })
    return data
}

export const login = async (code) => {
    const { data } = await $host.post(`api/v1/auth/login?code=${code}`)
    localStorage.setItem('token', data.id_token)
    return jwtDecode(data.id_token)
}