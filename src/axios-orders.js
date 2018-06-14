import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-app-burger.firebaseio.com/'
});

export default instance;
