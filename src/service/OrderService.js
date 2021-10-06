import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8085/api/order/";

class CartService {

    createOrder(order){
        return axios.post(USER_API_BASE_URL+"saveOrder", order);
    }

    getOrder(){
        return axios.get(USER_API_BASE_URL+"getOrder");
    }
    
    getOrderByUser(userId){
        return axios.get(USER_API_BASE_URL+"orderUser/" +userId);
    }

}

export default new CartService()