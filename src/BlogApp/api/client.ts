import axios from 'axios'; //make HTTP requests
export default axios.create({
  baseURL: 'http://localhost:3000/api',
});
