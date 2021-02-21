import http from './httpService';
import { apiUrl } from '../config/config.json';

const tokenKey = 'token';

export async function login(email, password) {
    const { data } = await http.post(`${apiUrl}/auth`, { email: email, password: password }); // {email: email, password: password} = {email, password}
    localStorage.setItem(tokenKey, data.token);
}

export default {
    login
}