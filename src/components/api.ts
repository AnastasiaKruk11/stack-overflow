import axios from "axios"

const api = axios.create({
    baseURL: 'https://codelang.vercel.app/api',
    timeout: 7000,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
      'withCredentials': true,

      //'Authorization': 'token'
    }
})

export default api;