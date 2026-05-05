import axios from "axios";

const AUTH_API = axios.create({

    baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default AUTH_API;