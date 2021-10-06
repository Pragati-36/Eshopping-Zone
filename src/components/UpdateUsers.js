import React, { Component } from 'react'
import CustomerService from '../service/CustomerService';

export class UpdateUsers extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id: this.props.match.params.id,
            email: '',
            username:'',
            password:''
        }
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
    }
    componentDidMount(){
        CustomerService.getUserById(this.state.id).then( (res) =>{
            let users = res.data;
            this.setState({email:users.email,
                username:users.username,
                password:users.password
            });
        });
    }
    saveOrUpdateUser = (e) => {
        e.preventDefault();
        let users = {email: this.state.email,username:this.state.username,password:this.state.password};
        console.log('users => ' + JSON.stringify(users));
        CustomerService.updateUsers(users, this.state.id).then( res => {
            alert("User profile updated successfully");
            this.props.history.push('/profile');
        });
    
    }
    changeEmailIdHandler= (event) => {
        this.setState({email: event.target.value});
    }
    changeUserNameHandler= (event) => {
        this.setState({username: event.target.value});
    }
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
    cancel(){
        this.props.history.push('/profile');
    }
    getTitle(){
            return <h3 className="text-center">Update User Profile </h3>
        
    }


    
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                        

                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" type="email" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailIdHandler} required
                                                />
                                        </div>
                                        <div className = "form-group">
                                            <label> Username </label>
                                            <input placeholder="Username" name="username" className="form-control" 
                                                value={this.state.username} onChange={this.changeUserNameHandler} required
                                                />
                                        </div>
                                        <div className = "form-group">
                                            <label> Password </label>
                                            <input placeholder="password" type="password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler} required
                                                />
                                        </div>
                                        <br></br>
                                        
                                        <button className="btn btn-success" onClick={this.saveOrUpdateUser}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateUsers
