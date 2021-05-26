import axios from 'axios'

const service = axios.create({
    baseURL: 'baseURL', 
    timeout: 3000
})
service.interceptors.response.use(response  => {
    return response 
}, error => {
    return Promise.resolve(error.response)
})
export default service