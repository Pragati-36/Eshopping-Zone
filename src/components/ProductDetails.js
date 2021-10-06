import React, { Component } from 'react'
import axios from 'axios'
import AuthService from "../service/auth.service";

export class ProductDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            currentUser: AuthService.getCurrentUser(),
            productid: this.props.match.params.productid,
            product:[]
        }
    }
    viewCart(productid){
        if(!this.state.currentUser){
            alert("Please Login First");
            this.props.history.push(`/login`);

        }else{
        alert("Please Set Quantity Further");
        this.props.history.push(`/add-cart/${productid}`);
        }
    }


    componentDidMount(){
        axios.get(`http://localhost:8085/api/product/api/product/${this.state.productid}`)
        .then(response=>{
            console.log(response)
            this.setState({product:response.data})
        })
    }
    
    render() {
        const{product}=this.state
        return (
            <div className="content1">
               <h2 style={{textAlign:'center',color:'#f1356d'}}>Product details</h2>
               <br></br>
               <br></br>

               <div className="product">
                   <div className="wrap">
                        <img src={product.image} className="productimg"></img>
                        <div style={{margin:'20px'}}>
                            <h4 style={{fontWeight:'bold'}}>{product.productName}</h4><br></br>
                            <h4>Category: {product.category}</h4>
                            <h6>Type: {product.productType}</h6> 
                            <h3>Price:<span style={{color:'#f1356d'}}>Rs. {product.price}</span></h3>
                            <p><span style={{fontWeight:'bold'}}>Description:</span> {product.description}</p>
                            <button style={{color:'white',textDecoration:'none',backgroundColor:'#f1356d',borderRadius:'8px',width:'150px',height:'40px',border:'none'}} onClick={ () => this.viewCart(product.productid)}>Add To Cart</button>
                        </div>
                   </div>
               </div>
            </div>
        )
    }
}

export default ProductDetails
