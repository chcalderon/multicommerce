import axios from "axios";

const local = `${import.meta.env.VITE_BACKURLPORT}`
const api = axios.create({
    baseURL : `${local}/api`
})

export default api