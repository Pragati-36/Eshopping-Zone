import React, { Component } from 'react'
import UserService from '../service/UserService';


class CreateUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            userId: this.props.match.params.userId,
            fullName: '',
            mobilenum: '',
            emailId: '',
            image:'',
            dateOfBirth:'',
            gender:'',
            username:'',
            password:''
        }
        this.changeFullNameHandler = this.changeFullNameHandler.bind(this);
        this.changeMobileNumHandler = this.changeMobileNumHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changeImageHandler = this.changeImageHandler.bind(this);
        this.changeDateOFBirthHandler = this.changeDateOFBirthHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.userId === '_add'){
            return
        }else{
            UserService.getUserById(this.state.userId).then( (res) =>{
                let users = res.data;
                this.setState({fullName: users.fullName,
                    mobilenum: users.mobilenum,
                    emailId : users.emailId,
                    image:users.image,
                    dateOfBirth:users.dateOfBirth,
                    gender:users.gender,
                    username:users.username,
                    password:users.password
                });
            });
        }        
    }
    saveOrUpdateUser = (e) => {
        e.preventDefault();
        let users = {fullName: this.state.fullName, mobilenum: this.state.mobilenum, emailId: this.state.emailId,image:this.state.image,dateOfBirth:this.state.dateOfBirth,gender:this.state.gender,username:this.state.username,password:this.state.password};
        console.log('users => ' + JSON.stringify(users));

        // step 5
        if(this.state.userId === '_add'){
            UserService.createUsers(users).then(res =>{
                this.props.history.push('/users');
            });
        }else{
            UserService.updateUser(users, this.state.userId).then( res => {
                this.props.history.push('/users');
            });
        }
    }
    
    changeFullNameHandler= (event) => {
        this.setState({fullName: event.target.value});
    }

    changeMobileNumHandler= (event) => {
        this.setState({mobilenum: event.target.value});
    }

    changeEmailIdHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    changeImageHandler= (event) => {
        this.setState({image: event.target.value});
    }
    changeDateOFBirthHandler= (event) => {
        this.setState({dateOfBirth: event.target.value});
    }
    changeGenderHandler= (event) => {
        this.setState({gender: event.target.value});
    }
    changeUserNameHandler= (event) => {
        this.setState({username: event.target.value});
    }
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    cancel(){
        this.props.history.push('/users');
    }

    getTitle(){
        if(this.state.userId === '_add'){
            return <h3 className="text-center">Register User</h3>
        }else{
            return <h3 className="text-center">Update User Profile </h3>
        }
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
                                            <label> Full Name: </label>
                                            <input placeholder="Full Name" name="fullName" className="form-control" 
                                                value={this.state.fullName} onChange={this.changeFullNameHandler} required
                                                />
                                        </div>
                                        <div className = "form-group">
                                            <label> Mobile Number </label>
                                            <input placeholder="Mobile Number" name="mobilnum" className="form-control" 
                                                value={this.state.mobilenum} onChange={this.changeMobileNumHandler} required
                                                />
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" type="email" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailIdHandler} required
                                                />
                                        </div>
                                        <div className = "form-group">
                                            <label> Image </label>
                                            <input placeholder="Image" name="image" className="form-control" 
                                                value={this.state.image} onChange={this.changeImageHandler} required
                                                />
                                        </div>
                                        <div className = "form-group">
                                            <label> Date of birth </label>
                                            <input placeholder="Date of Birth" type="date" name="dateOfBirth" className="form-control" 
                                                value={this.state.dateOfBirth} onChange={this.changeDateOFBirthHandler} required
                                                />
                                        </div>
                                        <div className = "form-group">
                                            <label> Gender </label>
                                            <input placeholder="Gender" name="gender" className="form-control" 
                                                value={this.state.gender} onChange={this.changeGenderHandler} required
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

export default CreateUserComponent