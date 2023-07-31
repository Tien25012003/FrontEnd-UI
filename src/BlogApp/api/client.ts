import axios from 'axios'; //make HTTP requests
export default axios.create({
  baseURL: 'http://192.168.0.109:3000/api',
});
