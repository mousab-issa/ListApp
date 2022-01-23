import axios from 'axios';
import {END_POINTS} from 'src/config/API_END_POINTS';

const axiosInstance = axios.create({
  baseURL: END_POINTS.baseUrl,
});

export default axiosInstance;
