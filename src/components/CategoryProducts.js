import React, { Component } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'

export class CategoryProducts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: this.props.match.params.category,
            product:[]
        }
    }
    viewDetails(productid){
        this.props.history.push(`/productdetails/${productid}`);
     }
    componentDidMount(){
        axios.get(`http://localhost:8085/api/product/api/productCategory/${this.state.category}`)
        .then(response=>{
            console.log(response)
            this.setState({product:response.data})
        })
    }
    render() {
        const {category,product}=this.state
        return (
            <div className="content1">
                <Table>
                            <thead><tr>
                            <th>Image</th>
                            <th>Category</th>
                            <th>Name</th>
                            <th>Price</th>
                            {/*<th>Add to cart</th>*/}
                            <th>View Details</th>
                            </tr></thead></Table>
                {
                    product.length ?
                    product.map(product=><div style={{display:'flex'}} key={product.productid}>
                            <Table>
                            <tr>
                                <td><img src={product.image} className="image"></img></td>
                                <td>{product.category}</td>
                                <td>{product.productName}</td>
                                <td>Rs. {product.price}</td>
                                {/*<td><a href="#" style={{color:'white',textDecoration:'none',backgroundColor:'#f1356d',borderRadius:'8px'}}>Add to cart</a></td>*/}
                                <td><button style={{color:'white',textDecoration:'none',backgroundColor:'#f1356d',borderRadius:'8px'}} onClick={ () => this.viewDetails(product.productid)} className="btn btn-info">View Details </button></td>
                            </tr>
                        </Table>

                    </div>
                    ):null}
            </div>
        )
    }
}

export default CategoryProducts
