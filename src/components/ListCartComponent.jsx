import React, { Component } from 'react'
import CartService from '../service/CartService';

export class ListCartComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
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
    placeOrder(carts){
      this.props.history.push(`/order/${carts}`);
     //console.log(carts);
    }
    //editUser(cartId){
    //   this.props.history.push(`/add-cart/${userId}`);
    //}

    componentDidMount(){
        CartService.getCart().then((res) => {
            this.setState({ carts: res.data});
        });
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
        const {carts}=this.state
        return (
            <div className="content1">
                 <h2 className="text-center">All Carts</h2>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                <th> User ID</th>
                                    <th> Product Name</th>
                                    <th> Total Price</th>
                                    <th> Quantity</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.carts.map(
                                        carts => 
                                        <tr key = {carts.cartId}>
                                            <td> { carts.userid} </td> 
                                             <td> { carts.productName} </td>   
                                             <td> {carts.totalPrice}</td>
                                             <td> {carts.quantity}</td>
                                             {/*<td>
                                                 <button onClick={ () => this.editCart(carts.cartId)} className="btn btn-info">Update </button>
                                                 {/*<button style={{marginLeft: "10px"}} onClick={ () => this.deleteCart(carts.cartId)} className="btn btn-danger">Delete </button>
                                                 {/*<button style={{marginLeft: "10px"}} onClick={ () => this.viewUser(users.userId)} className="btn btn-info">View </button>
                                             </td>*/}
                                        </tr>
                
                                    )
                                }
                            </tbody>
                        </table>

                        <br></br>
                        <br></br>
                        

                 </div>

            </div>
        )
    }
}

export default ListCartComponent
