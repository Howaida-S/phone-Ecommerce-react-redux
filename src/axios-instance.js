import axios from 'axios';
const instance = axios.create({
  baseURL:'https://phone-e-commerce.firebaseio.com/'
});
export default instance;