import axios from 'axios';
enum ApiRoutes {
    LOCAL = 'http://localhost:3000',
}

export const api = axios.create({
    baseURL: ApiRoutes.LOCAL,
    headers: {
        'Content-Type': 'application/json',
    },
});
