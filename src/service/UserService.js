import axios from 'axios';
import authHeader from './auth-header';

const USER_API_BASE_URL = "http://localhost:8081/api/users";

class UserService {

    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }

    createUsers(user){
        return axios.post(USER_API_BASE_URL, user);
    }

    getUserById(userId){
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    updateUser(user, userId){
        return axios.put(USER_API_BASE_URL + '/' + userId, user);
    }

    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }
    getUserByUsername(username){
        return axios.get(USER_API_BASE_URL + '/username/' + username);
    }
}

export default new UserService()
