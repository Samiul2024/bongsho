import axios from "axios";

const AUTH_API = axios.create({

    baseURL:
        "https://bongsho.onrender.com/api/auth",
});

export default AUTH_API;