import React, { Component } from 'react'
import ProductService from '../service/ProductService'

class ListProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                products: []
        }
        this.addProduct = this.addProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(productid){
        ProductService.deleteProduct(productid).then( res => {
            alert("Product deleted successfully")
            this.setState({products: this.state.products.filter(products => products.productid !== productid)});
        });
    }
    //viewUser(userId){
     //   this.props.history.push(`/view-user/${userId}`);
    //}
    editProduct(productid){
        this.props.history.push(`/add-product/${productid}`);
    }

    componentDidMount(){
        ProductService.getProduct().then((res) => {
            this.setState({ products: res.data});
        });
    }

    addProduct(){
        this.props.history.push('/add-product/_add');
    }

    render() {
        return (
            <div className="content1">
                 <h2 className="text-center">Products List</h2>
                 
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Product Name</th>
                                    <th> Product Type</th>
                                    <th> Product Category</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.map(
                                        products => 
                                        <tr key = {products.productid}>
                                             <td> { products.productName} </td>   
                                             <td> {products.productType}</td>
                                             <td> {products.category}</td>
                                             <td>
                                                 <button onClick={ () => this.editProduct(products.productid)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProduct(products.productid)} className="btn btn-danger">Delete </button>
                                                 {/*<button style={{marginLeft: "10px"}} onClick={ () => this.viewUser(users.userId)} className="btn btn-info">View </button>*/}
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        <br></br>
                        <div className = "row">
                            <button className="btn btn-primary" style={{width:'150px',position:'right'}} onClick={this.addProduct}> Add product</button>
                        </div>

                 </div>

            </div>
        )
    }
}

export default ListProductComponent