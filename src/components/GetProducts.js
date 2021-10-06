import React, { Component } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import CarouselCont from './CarouselCont'


class GetProducts extends Component {
    constructor(props){
        super(props)

        this.state = {
            product:[],
            errormsg:''
        }
    }
    viewUser(productid){
       this.props.history.push(`/productdetails/${productid}`);
    }
    viewCategory(category){
        this.props.history.push(`/category/${category}`);
    }
    componentDidMount(){
        axios.get('http://localhost:8085/api/product/api/product')
        .then(response=>{
            console.log(response)
            this.setState({product:response.data})
        })
        .catch(error=>{
            console.log(error)
            this.setState({errormsg:'error retrieve'})
        })
    }
    render(){
        const{product,errormsg,category}=this.state
        return (
            <div>
                <CarouselCont />
                {/*  Categories Wise Products      */}
                <div style={{maxWidth:'1000px',margin:'20px auto'}}>
                <h2 style={{textAlign:'center'}}>Product Categories</h2>
                <br></br>
                {
                    product.length ?
                    product.map(product=><div style={{display:'inline-block',margin:'5px',textAlign:'center'}} key={product.productid}>
                        <div style={{display:'inline-block'}}>
                            <div>
                                <button className="Category" onClick={ () => this.viewCategory(product.category)}>{product.category}</button>
                            </div>
                        </div>
                    </div>
                    ):null}
                     <br></br>
                     <br></br>
                     <br></br>
                     <br></br>
                    </div >
                {/*   All Products    */}
                <div style={{maxWidth:'1000px',margin:'20px auto'}}>
                <h2 style={{textAlign:"center"}}>Our Products</h2>
                <br></br>
                <br></br>
                <Table>
                            <thead><tr>
                            <th>Image</th>
                            <th>Category</th>
                            <th>Name</th>
                            <th>Price</th>
                            {/*<th>Add to cart</th>*/}
                            <th>View Details</th>
                            </tr></thead></Table>{
                    product.length ?
                    product.map(product=><div key={product.productid}>
                            <Table>
                            <tr>
                                <td><img src={product.image} className="image"></img></td>
                                <td>{product.category}</td>
                                <td>{product.productName}</td>
                                <td>Rs. {product.price}</td>
                                {/*<td><a href="#" style={{color:'white',textDecoration:'none',backgroundColor:'#f1356d',borderRadius:'8px'}}>Add to cart</a></td>*/}
                                <td><button style={{color:'white',textDecoration:'none',backgroundColor:'#f1356d',borderRadius:'8px',border:'none'}} onClick={ () => this.viewUser(product.productid)} className="details">View Details </button></td>
                            </tr>
                        </Table>

                        </div>
                        ):
                    null
                }
                </div>
                {errormsg ? <div>{errormsg}</div> :null}
                



            </div>

        )
    }
}

export default GetProducts