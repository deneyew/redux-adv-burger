import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-a7a18.firebaseio.com/'
});

export default instance;