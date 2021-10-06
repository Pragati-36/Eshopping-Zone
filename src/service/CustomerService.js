import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8682/api/test/';

class CustomerService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  deleteUser(id) {
    return axios.delete(API_URL + 'users/' + id, { headers: authHeader() });
  }

  updateUsers(user,id) {
    return axios.put(API_URL + 'users/' + id, user, { headers: authHeader() });
  }

  getAllUsers() {
    return axios.get(API_URL + 'users', { headers: authHeader() });
  }

  getUserById(id) {
    return axios.get(API_URL + 'users/'+ id, { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new CustomerService();