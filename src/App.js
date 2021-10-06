import './App.css';
import React, { Component } from "react";
import GetProducts from './components/GetProducts';
import PostProducts from './components/PostProducts';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';


import GetUsers from './components/GetUsers';
import ListUserComponent from './components/ListUserComponent';
import CreateUserComponent from './components/CreateUserComponent';
import ProductDetails from './components/ProductDetails';
import ListProductComponent from './components/ListProductComponent';
import CreateProductComponent from './components/CreateProductComponent';
import NavMenu from './components/NavMenu';
import CategoryProducts from './components/CategoryProducts';
import AddCart from './components/AddCart';
import ListCartComponent from './components/ListCartComponent';

import Login from './components/Login';

import Profile from './components/Profile';
import Order from './components/Order';
import Register from './components/Register';
import AuthService from './service/auth.service';
import BoardAdmin from './components/board-admin.component';
import UpdateUsers from './components/UpdateUsers';
import GetUserCart from './components/GetUserCart';
import ThankYou from './components/ThankYou';
import { OrderUser } from './components/OrderUser';
import ListOrderComponent from './components/ListOrderComponent';
import CreditCard from './components/CreditCard';
import StripeButton from './components/StripeButton';
import UpdateCart from './components/UpdateCart';



class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
      showAdminBoard: false
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN")
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser,showAdminBoard } = this.state;
    
  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-light bg-light">
        <Router>
          <Switch>
        <Route>
          <a href="/" className="navbar-brand" style={{color:'#f1356d',fontWeight:'bold'}}>
            EShopping Zone
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/home" className="nav-link" style={{fontWeight:'bold'}}>
                Home
              </a>
            </li>


            {currentUser && (
              <li className="nav-item">
                <a href="/getusercart/:id" className="nav-link" style={{fontWeight:'bold'}}>
                <img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" className="cart"></img>
                </a>
            </li>
            
            )}
            {showAdminBoard && (
              <div>
              <li className="nav-item">
                <a href="/admin" className="nav-link" style={{fontWeight:'bold'}}>
                  Admin Board
                </a>
              </li>
            </div>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="/profile" className="nav-link" style={{fontWeight:'bold'}}>
                  {currentUser.username}
                </a>
              </li>
              <li className="nav-item">
                <a href="/userorder" className="nav-link" style={{fontWeight:'bold'}}>
                  {currentUser.username} Orders
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="/login" className="nav-link" style={{fontWeight:'bold'}}>
                  Login
                </a>
              </li>

              <li className="nav-item">
                <a href="/register" className="nav-link" style={{fontWeight:'bold'}}>
                  Sign Up
                </a>
              </li>
            </div>
          )}
          </Route>
          </Switch>
          </Router>
        </nav>



{/*------------------------------------------- */}
    <div>
    {/*<NavMenu></NavMenu>*/}
    
    
      <Router>
        <Switch>
        <div className="content">
        <Route exact path={["/", "/home"]} component={GetProducts}></Route>
        {/*<Route exact path='/addproducts' component={PostProducts}></Route>*/}
        <Route path = '/users' component = {ListUserComponent}></Route>
        <Route path = "/add-user/:userId" component = {CreateUserComponent}></Route>
        <Route path='/productdetails/:productid' component={ProductDetails}></Route>
        <Route path = '/products' component = {ListProductComponent}></Route>
        <Route path = "/add-product/:productid" component = {CreateProductComponent}></Route>
       <Route path = '/category/:category' component={CategoryProducts}></Route>
        <Route path = '/add-cart/:productid' component={AddCart}></Route>
        <Route path = '/getCart' component={ListCartComponent}></Route>
        <Route path = '/order/:totPrice' component={Order}></Route>
        <Route path = '/thank' component={ThankYou}></Route>
        <Route path = '/userorder' component={OrderUser}></Route>
        <Route path = '/allorders' component={ListOrderComponent}></Route>
        <Route exact path="/updatecarts/:cartId" component={UpdateCart}/>

        
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/admin" component={BoardAdmin}/>
        <Route exact path="/getusers" component={GetUsers}/>
        <Route exact path="/updateusers/:id" component={UpdateUsers}/>
        <Route exact path="/getusercart/:id" component={GetUserCart}/>
        <Route exact path="/credit/:totPrice" component={CreditCard}/>
       {/*<Route path = '/admin' component={Admin}></Route>
       <Route path = '/addashboard' component={AdminDasboard}></Route>*/}
       <Route exact path="/stripe" component={StripeButton}/>
       
        </div>
        </Switch>
      </Router>
    </div>

    </div>
  );
}

}
export default App;

