import axios from 'axios'


const Api = axios.create({
  baseURL:import.meta.env.VITE_SERVER,
  withCredentials: true
})

Api.interceptors.response.use((response) => {
  return response
}, (error) => {
  if(error.response.status === 401 && window.location.pathname !== '/login') {
    window.location.href = '/login'
    localStorage.clear()
  }
  return Promise.reject(error)
})

export default Api
