import axios from "axios";

const api = axios.create({
    baseURL: "https://task-management-api-h92p.onrender.com/api/v1",
});

export default api;
