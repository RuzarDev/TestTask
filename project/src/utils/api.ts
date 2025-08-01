import axios from 'axios';
enum ApiRoutes {
    LOCAL = 'http://localhost:3000',
    RENDER = "https://testtaskserver.onrender.com"
}

export const api = axios.create({
    baseURL: ApiRoutes.RENDER,
    headers: {
        'Content-Type': 'application/json',
    },
});
