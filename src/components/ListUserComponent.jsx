import React, { Component } from 'react'
import UserService from '../service/UserService'

class ListUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                users: []
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(userId){
        UserService.deleteUser(userId).then( res => {
            this.setState({users: this.state.users.filter(users => users.userId !== userId)});
        });
    }
    //viewUser(userId){
     //   this.props.history.push(`/view-user/${userId}`);
    //}
    editUser(userId){
        this.props.history.push(`/add-user/${userId}`);
    }

    componentDidMount(){
        UserService.getUsers().then((res) => {
            this.setState({ users: res.data});
        });
    }

    addUser(){
        this.props.history.push('/add-user/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Users List</h2>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> User Full Name</th>
                                    <th> User Mobile Number</th>
                                    <th> User Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map(
                                        users => 
                                        <tr key = {users.userId}>
                                             <td> { users.fullName} </td>   
                                             <td> {users.mobilenum}</td>
                                             <td> {users.emailId}</td>
                                             <td>
                                                 <button onClick={ () => this.editUser(users.userId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(users.userId)} className="btn btn-danger">Delete </button>
                                                 {/*<button style={{marginLeft: "10px"}} onClick={ () => this.viewUser(users.userId)} className="btn btn-info">View </button>*/}
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        <div className = "row">
                            <button className="btn btn-primary" style={{width:'150px'}} onClick={this.addUser}> Add User</button>
                        </div>
                 </div>

            </div>
        )
    }
}

export default ListUserComponent