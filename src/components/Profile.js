import React, { Component } from "react";
import AuthService from "../service/auth.service";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }
  viewUser(id){
    this.props.history.push(`/updateusers/${id}`);
 }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="content1">
      <div className="container">
        <header className="jumbotron">
          <h3>
            Welcome to <strong>{currentUser.username}</strong> Profile
          </h3>
        </header>
       {/* <p>
          <strong>Token:</strong>{" "}
          {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
       </p>*/}
        <p>
          <strong>Id:</strong>{" "}
          {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          {currentUser.email}
        </p>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
        <button style={{width:'130px',color:'white',backgroundColor:'#f1356d',height:'40px',border:'none'}} onClick={ () => this.viewUser(currentUser.id)}>Update</button>
      </div>
      </div>
    );
  }
}