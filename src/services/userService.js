import http from "./httpService";
import { apiUrl } from "../config.json";
import jwtDecode from "jwt-decode";
const tokenKey = 'token';

export function getJwt() {
    return localStorage.getItem(tokenKey);
}

export function logout() {
    localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
        return jwtDecode(jwt);
    } catch (error) {
        return null;
    }
}

export async function login(email, password) {
    const { data } = await http.post(`${apiUrl}/auth`, { email, password });
    localStorage.setItem(tokenKey, data.token);
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    login,
    getCurrentUser,
    logout,
    getJwt
};