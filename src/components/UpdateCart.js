import React, { Component } from 'react'
import AuthService from '../service/auth.service'
import CartService from '../service/CartService'

export class UpdateCart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            currentUser: AuthService.getCurrentUser(),
            cartId: this.props.match.params.cartId,
            productName:'',
            price:'',
            totalPrice:'',
            quantity:'1'
        }
    }
    changeQuantityHandler= (event) => {
        this.setState({quantity: event.target.value});
    }
    changeTotalHandler= (event) => {
        this.setState({totalPrice: event.target.value});
    }
    componentDidMount(){
        CartService.getCartById(this.state.cartId).then( (res) =>{
            let carts = res.data;
            this.setState({userid:carts.userid,
                productName:carts.productName,
                price:carts.price,
                quantity:carts.quantity,
                totalPrice:carts.totalPrice,
                
            });
        });
    }

    saveOrUpdateCart = (e) => {
        e.preventDefault();
        let carts = {userid: this.state.currentUser.userid,totalPrice:this.state.totalPrice,productName:this.state.productName,price:this.state.price,quantity:this.state.quantity};
        console.log('carts => ' + JSON.stringify(carts));
        CartService.updateCartByUser(carts, this.state.cartId).then( res => {
            alert("Cart updated successfully");
            this.props.history.push('/getusercart/:id');
        });
    
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
                                                value={this.state.productName} onChange={this.changeProductNameHandler} disabled={true}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Price </label>
                                            <input placeholder="Price" name="price" className="form-control" 
                                                value={this.state.price} onChange={this.changePriceHandler} disabled={true}/>
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
                                        <button className="btn btn-success" onClick={this.saveOrUpdateCart}>Save</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>

            </div>
        )
    }
}

export default UpdateCart
