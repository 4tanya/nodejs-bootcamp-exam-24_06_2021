import axios from 'axios';
import { apiUrl, apiEndpoint } from '../constants';

const endpoint = apiUrl + apiEndpoint;
const setHeaders = (token) => ({ 'Authorization': `Bearer ` + token });

export default class HomeService {
  searchCars = (brand, token) => {
    return axios.get(endpoint + `/cars/${brand}`, {
      headers: setHeaders(token)
    });
  };
}
