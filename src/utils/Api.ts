import axios from 'axios'


const Api = axios.create({
  baseURL:import.meta.env.VITE_SERVER
})

export default Api
