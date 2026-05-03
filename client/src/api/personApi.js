import axios from "axios";

const API = axios.create({
    baseURL: "https://bongsho.onrender.com/api",
});

export default API;