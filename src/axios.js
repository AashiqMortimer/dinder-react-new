import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://dinder-backend-zaar.herokuapp.com'
})

export default instance;