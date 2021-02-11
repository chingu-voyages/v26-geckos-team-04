import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_FIREBASE_CLOUD_FUNCTIONS_API_BASE_URL
})

export default instance;

