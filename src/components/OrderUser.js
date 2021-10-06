import React, { Component } from 'react'
import OrderService from '../service/OrderService';
import AuthService from "../service/auth.service";

export class OrderUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            currentUser: AuthService.getCurrentUser(),
            orders: [],
        }
        
    }


    componentDidMount(){
        OrderService.getOrderByUser(this.state.currentUser.id).then((res) => {
            this.setState({ orders: res.data});
        });
    }

    
    render() {
        //const {orders,currentUser}=this.state
        return (
            <div className="content1">
                
               <h2 className="text-center">Your Orders</h2>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Order Date</th>
                                    <th> Total Price</th>
                                    <th> Mode Of Payment</th>
                                    <th>Flat Number</th>
                                    <th>Mobile Number</th>
                                    <th>City</th>
                                    <th>Pincode</th>
                                    <th>State</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.orders.map(
                                        orders => 
                                        <tr key = {orders.orderId}>
                                            <td> { orders.orderDate} </td>  
                                             <td> { orders.amountPaid} </td>   
                                             <td> {orders.modeOfPayment}</td>
                                             <td> {orders.flatNumber}</td>
                                             <td> {orders.mobileNumber}</td>
                                             <td> {orders.city}</td>
                                             <td> {orders.pincode}</td>
                                             <td> {orders.state}</td>
                                             
                                        </tr>
                
                                    )
                                }
                            </tbody>
                        </table>

                        

                 </div>
 
            </div>
        )
    }
}

export default OrderUser
