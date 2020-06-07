import axios from 'axios';


const instance = axios.create({
  baseURL: 'http://localhost:3003/mapi',
});

export default instance;