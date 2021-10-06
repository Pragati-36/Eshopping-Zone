import React, { Component } from 'react'
import CartService from '../service/CartService';
import ProductService from '../service/ProductService';
import AuthService from "../service/auth.service";

export class AddCart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            currentUser: AuthService.getCurrentUser(),
            productid: this.props.match.params.productid,
            productName: '',
            price:'',
            quantity:'',
            totalPrice:''
        }
       // this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
        this.changeTotalHandler = this.changeTotalHandler.bind(this);
        this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this);
    }
    componentDidMount(){
        ProductService.getProductById(this.state.productid).then( (res) =>{
            let products = res.data;
            this.setState({
                productName: products.productName,
                price:products.price,
                quantity:'1',
                totalPrice:''
            });
        });
    }
    saveOrUpdateProduct = (e) => {
        e.preventDefault();
        let products = {userid:this.state.currentUser.id,productName: this.state.productName, price: this.state.price, quantity:this.state.quantity,totalPrice:this.state.totalPrice};
        console.log('products => ' + JSON.stringify(products));

        // step 5
            CartService.createCart(products).then(res =>{
                alert("Product Added Successfully");
                this.props.history.push('/getusercart/:id');
            });


    }
    changeProductNameHandler= (event) => {
        this.setState({productName: event.target.value});
    }
    changePriceHandler= (event) => {
        this.setState({price: event.target.value});
    }
    changeQuantityHandler= (event) => {
        this.setState({quantity: event.target.value});
    }
    changeTotalHandler= (event) => {
        this.setState({totalPrice: event.target.value});
    }
    render() {
        const {currentUser}=this.state
        return (
            <div>
                
                <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label>User Id</label>
                                            <input placeholder="User Id" name="userid" className="form-control" 
                                                value={currentUser.id} onChange={this.changeProductNameHandler} disabled={true}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Product Name </label>
                                            <input placeholder="Product Name" name="productName" className="form-control" 
                                                value={this.state.productName} onChange={this.changeProductNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Price </label>
                                            <input placeholder="Price" name="price" className="form-control" 
                                                value={this.state.price} onChange={this.changePriceHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Quantity </label>
                                            <input  type="number" min="1" placeholder="Quantity" name="quantity" className="form-control" 
                                                value={this.state.quantity} onChange={this.changeQuantityHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Total Price </label>
                                            <input placeholder="Total Price" name="totalPrice" className="form-control" 
                                                value={this.state.totalPrice=this.state.price*this.state.quantity} onChange={this.changeTotalHandler} disabled ={true}/>
                                        </div>
                                        <br></br>
                                        <br></br>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateProduct}>Save</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>

            </div>
        )
    }
}

export default AddCart
