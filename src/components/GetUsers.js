import React, { Component } from 'react'
import axios from 'axios'; 
import { Link } from 'react-router-dom'; 
import CustomerService from '../service/CustomerService';

class GetUsers extends Component {
    state = {  
        user: []  
      }  
        
      componentDidMount() {  
        CustomerService.getAllUsers().then((res) => {
          this.setState({ user: res.data});
      }); 
      }  
        
      deleteUser(id){
        CustomerService.deleteUser(id).then( res => {
            this.setState({user: this.state.user.filter(user => user.id !== id)});
        });
    }
        
      render() {  
        return (  
          <div className="content1">  
            <h1 style={{textAlign:'center'}}> All Users </h1>  
        
            <table className="table table-bordered">  
                <thead>  
                  <tr> 
                      <th>User ID</th> 
                      <th>Email Id</th>  
                      <th>UserName</th> 
  
                      <th>Action</th>  
                  </tr>  
                </thead>  
        
                <tbody>  
                  {this.state.user.map((user) => (  
                    <tr>
                      <td>{user.id}</td>  
                      <td>{user.email}</td>  
                      <td>{user.username}</td>   
                      <td>  
                        <button className="btn btn-danger" onClick={ () => this.deleteUser(user.id)}>Delete</button>
                        {/*<button className="btn btn-success" onClick={() => this.updateCourseClicked(user.userId)}>Edit</button> */} 
                      </td>  
                    </tr>  
                  ))}  
                </tbody>  
        
            </table>  
          </div>  
        )  
      }  
    }  

export default GetUsers
