import React, { Component } from 'react'
import AuthService from "../service/auth.service";
import OrderService from '../service/OrderService';

export class Order extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            currentUser: AuthService.getCurrentUser(),
            totPrice:this.props.match.params.totPrice,
            orderDate:'',
            modeOfPayment:'',
            mobileNumber:'',
            flatNumber:'',
            city:'',
            pincode:'',
            state:''

        }
        this.changeDateHandler= this.changeDateHandler.bind(this);
        this.changemodePaymentHandler=this.changemodePaymentHandler.bind(this);
        this.changeMobileHandler=this.changeMobileHandler.bind(this);
        this.changeFlatHandler=this.changeFlatHandler.bind(this);
        this.changeCityHandler=this.changeCityHandler.bind(this);
        this.changePincodeHandler=this.changePincodeHandler.bind(this);
        this.changeStateHandler=this.changeStateHandler.bind(this);
    }

    saveOrUpdateProduct = (e) => {
        e.preventDefault();
        let order = {orderDate:this.state.orderDate,userId:this.state.currentUser.id,amountPaid: this.state.totPrice, modeOfPayment: this.state.modeOfPayment,mobileNumber:this.state.mobileNumber,flatNumber:this.state.flatNumber,city:this.state.city,pincode:this.state.pincode,state:this.state.state};
        console.log('order => ' + JSON.stringify(order));

        // step 5
            OrderService.createOrder(order).then(res =>{
                if(order.modeOfPayment ==="Cash"){
                    alert("Order Added Successfully");
                    this.props.history.push('/thank');
                }else{
                    alert("Make card Payment");
                    this.props.history.push(`/credit/${this.state.totPrice}`); 
                }

            });


    }
    changeDateHandler= (event) => {
        this.setState({orderDate: event.target.value});
    }
    changemodePaymentHandler= (event) => {
        this.setState({modeOfPayment: event.target.value});
    }
    changeMobileHandler= (event) => {
        this.setState({mobileNumber: event.target.value});
    }
    changeFlatHandler= (event) => {
        this.setState({flatNumber: event.target.value});
    }
    changeCityHandler= (event) => {
        this.setState({city: event.target.value});
    }
    changePincodeHandler= (event) => {
        this.setState({pincode: event.target.value});
    }
    changeStateHandler= (event) => {
        this.setState({state: event.target.value});
    }
    
    
    render() {
        const {totPrice,currentUser}=this.state
        return (
            <div className="content1">

                <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label>Order Date</label>
                                            <input type="date" placeholder="Order Date" name="orderDate" className="form-control" 
                                                value={this.state.orderDate} onChange={this.changeDateHandler}/>
                                        </div>
                                    <div className = "form-group">
                                            <label>User Id</label>
                                            <input placeholder="User Id" name="userid" className="form-control" 
                                                value={currentUser.id} onChange={this.changeProductNameHandler} disabled={true}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Amount Paid</label>
                                            <input placeholder="Amount Paid" name="amountPaid" className="form-control" 
                                                value={totPrice} onChange={this.changeProductNameHandler}  disabled={true}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Mode Of Payment </label>
                                            
                                            <input placeholder="Mode of Payment " name="modeOfPayment" className="form-control" 
                                                value={this.state.modeOfPayment} onChange={this.changemodePaymentHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Mobile Number </label>
                                            <input placeholder="Mobile Number" name="mobileNumber" className="form-control" 
                                                value={this.state.mobileNumber} onChange={this.changeMobileHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Flat Number </label>
                                            <input placeholder="Flat Number" name="flatNumber" className="form-control" 
                                                value={this.state.flatNumber} onChange={this.changeFlatHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> City </label>
                                            <input placeholder="City" name="city" className="form-control" 
                                                value={this.state.city} onChange={this.changeCityHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Pincode </label>
                                            <input placeholder="Pincode" name="pincode" className="form-control" 
                                                value={this.state.pincode} onChange={this.changePincodeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> State </label>
                                            <input placeholder="State" name="state" className="form-control" 
                                                value={this.state.state} onChange={this.changeStateHandler}/>
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

export default Order
