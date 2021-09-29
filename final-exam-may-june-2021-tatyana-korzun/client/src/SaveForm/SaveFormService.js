import axios from 'axios';
import { apiUrl, apiEndpoint } from '../constants';

const endpoint = apiUrl + apiEndpoint;
const setHeaders = (token) => ({ 'Authorization': `Bearer ` + token });

export default class SaveFormService {
  getEngines = (token) => {
    return axios.get(endpoint + '/engines/', {
      headers: setHeaders(token)
    });
  };

  saveCar = ({ brand, model, imageRef, engineId }, token) => {
    return axios.post(endpoint + '/cars/',
      { brand, model, imageRef, engineId },
      { headers: setHeaders(token)
    });
  }
}
