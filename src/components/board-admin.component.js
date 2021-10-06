import React, { Component } from "react";
import CustomerService from "../service/CustomerService";


export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    CustomerService.getAdminBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="content1">
      <div className="container">
        <header className="jumbotron">
          <h3>Welcome to {this.state.content}</h3>
          <button style={{backgroundColor:'#f1356d',width:'100px',border:'none',margin:'5px',height:'40px'}}><a href="/products" style={{color:'white',textDecoration:'none'}}>Products </a></button>
          
          <button style={{backgroundColor:'#f1356d',width:'100px',border:'none',margin:'5px',height:'40px'}}><a href="/getusers" style={{color:'white',textDecoration:'none'}}>Users </a></button>
  
          <button style={{backgroundColor:'#f1356d',width:'100px',border:'none',margin:'5px',height:'40px'}}><a href="/getcart" style={{color:'white',textDecoration:'none'}}>All Carts </a></button>

          <button style={{backgroundColor:'#f1356d',width:'100px',border:'none',margin:'5px',height:'40px'}}><a href="/allorders" style={{color:'white',textDecoration:'none'}}>All Orders </a></button>
        </header>
      </div>
      </div>
    );
  }
}