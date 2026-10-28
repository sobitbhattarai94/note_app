import axios from "axios"
const meroAxios = axios.create({
    baseURL: "http://localhost:5001/api",
})
export default meroAxios