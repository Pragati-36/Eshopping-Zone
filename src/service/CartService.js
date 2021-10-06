import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8085/api/cart/api/";

class CartService {

    createCart(cart){
        return axios.post(USER_API_BASE_URL+"addCart", cart);
    }

    getCart(){
        return axios.get(USER_API_BASE_URL+"getAllCart");
    }
    deleteCart(cartId){
        return axios.delete(USER_API_BASE_URL + "cart/" + cartId);
    }
    getCartByUser(userId){
        return axios.get(USER_API_BASE_URL+"cart/" +userId);
    }

    updateCartByUser(cart,cartId){
        return axios.put(USER_API_BASE_URL + 'cart/' + cartId, cart);
    }
    
    getCartById(cartId){
        return axios.get(USER_API_BASE_URL+"cartId/" +cartId);
    }

}

export default new CartService()