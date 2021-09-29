import axios from 'axios';
import { apiUrl } from '../constants';

const endpoint = '/auth';

export default class LoginService {
  login = ({ email, name, password }) => {
    return axios.post(apiUrl + endpoint, {
      email,
      name,
      password
    })
  };
}
