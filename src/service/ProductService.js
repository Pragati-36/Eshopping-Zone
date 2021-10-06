import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8085/api/product/api/product";

class ProductService {

    getProduct(){
        return axios.get(USER_API_BASE_URL);
    }

    createProduct(product){
        return axios.post(USER_API_BASE_URL, product);
    }
    

    getProductById(productid){
        return axios.get(USER_API_BASE_URL + '/' + productid);
    }

    updateProduct(product, productid){
        return axios.put(USER_API_BASE_URL + '/' + productid, product);
    }

    deleteProduct(productid){
        return axios.delete(USER_API_BASE_URL + '/' + productid);
    }
}

export default new ProductService()
