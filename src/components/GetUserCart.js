import React, { Component } from 'react'
import CartService from '../service/CartService';
import AuthService from "../service/auth.service";

export class GetUserCart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            currentUser: AuthService.getCurrentUser(),
            carts: [],
            totPrice:''
        }
        this.deleteCart= this.deleteCart.bind(this);
    }
    deleteCart(cartId){
        alert("Product delete from cart successfully")
        CartService.deleteCart(cartId).then( res => {
            this.setState({carts: this.state.carts.filter(carts => carts.cartId !== cartId)});
        });
    }
    placeOrder(totPrice){
        this.props.history.push(`/order/${totPrice}`);
       //console.log(carts);
      }

    componentDidMount(){
        CartService.getCartByUser(this.state.currentUser.id).then((res) => {
            this.setState({ carts: res.data});
        });
    }

    viewUser(cartId){
        this.props.history.push(`/updatecarts/${cartId}`);
     }
    getTotal() {
        let grandTotal = 0;
        const carts = this.state.carts.map(carts=>carts.totalPrice);
        if (carts.length > 0) {
          grandTotal = carts.reduce((acc, val) => acc + val);
        }
        return grandTotal;
      }

    
    render() {
        const {carts,currentUser,totPrice}=this.state
        return (
            <div className="content1">
                
               <h2 className="text-center">Your Cart</h2>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Product Name</th>
                                    <th> Total Price</th>
                                    <th> Quantity</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.carts.map(
                                        carts => 
                                        <tr key = {carts.cartId}>
                                             <td> { carts.productName} </td>   
                                             <td> {carts.totalPrice}</td>
                                             <td> {carts.quantity}</td>
                                             <td>
                                                 <button onClick={ () => this.viewUser(carts.cartId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCart(carts.cartId)} className="btn btn-danger">Delete </button>
                                                 {/*<button style={{marginLeft: "10px"}} onClick={ () => this.viewUser(users.userId)} className="btn btn-info">View </button>*/}
                                             </td>
                                        </tr>
                
                                    )
                                }
                            </tbody>
                        </table>

                        <div className = "form-group">
                                            <label> Total Price </label>
                                            <input placeholder="Total Order Price" name="totalPrice" className="form-control" 
                                                value={this.getTotal()}disabled ={true}/>
                        </div>
                        <br></br>
                        <br></br>
                        <div className = "row">
                            <button className="btn btn-primary" style={{width:'150px',marginLeft:'85%'}} onClick={ () => this.placeOrder(this.getTotal())}>Place Order</button>
                        </div>

                 </div>
 
            </div>
        )
    }
}

export default GetUserCart
