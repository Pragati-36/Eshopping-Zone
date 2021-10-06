import React, { Component } from 'react'
import ProductService from '../service/ProductService';

class CreateProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            productid: this.props.match.params.productid,
            productType: '',
            productName: '',
            category: '',
            image:'',
            price:'',
            description:''
        }
        this.changeProductTypeHandler = this.changeProductTypeHandler.bind(this);
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.changeImageHandler = this.changeImageHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changeDescHandler = this.changeDescHandler.bind(this);
        this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.productid === '_add'){
            return
        }else{
            ProductService.getProductById(this.state.productid).then( (res) =>{
                let products = res.data;
                this.setState({productType: products.productType,
                    productName: products.productName,
                    category : products.category,
                    image:products.image,
                    price:products.price,
                    description:products.description
                });
            });
        }        
    }
    saveOrUpdateProduct = (e) => {
        e.preventDefault();
        let products = {productType: this.state.productType, productName: this.state.productName, category: this.state.category,image:this.state.image,price:this.state.price,description:this.state.description};
        console.log('products => ' + JSON.stringify(products));

        // step 5
        if(this.state.productid === '_add'){
            ProductService.createProduct(products).then(res =>{
                alert("Product Added Successfully")
                this.props.history.push('/products');
            });
        }else{
            ProductService.updateProduct(products, this.state.productid).then( res => {
                this.props.history.push('/products');
            });
        }
    }
    
    changeProductTypeHandler= (event) => {
        this.setState({productType: event.target.value});
    }

    changeProductNameHandler= (event) => {
        this.setState({productName: event.target.value});
    }

    changeCategoryHandler= (event) => {
        this.setState({category: event.target.value});
    }

    changeImageHandler= (event) => {
        this.setState({image: event.target.value});
    }
    changePriceHandler= (event) => {
        this.setState({price: event.target.value});
    }
    changeDescHandler= (event) => {
        this.setState({description: event.target.value});
    }


    cancel(){
        this.props.history.push('/products');
    }

    getTitle(){
        if(this.state.productid === '_add'){
            return <h3 className="text-center">Add Products</h3>
        }else{
            return <h3 className="text-center">Update Product</h3>
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
                                            <label> Product Type: </label>
                                            <input placeholder="Product Type" name="productType" className="form-control" 
                                                value={this.state.productType} onChange={this.changeProductTypeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Product Name </label>
                                            <input placeholder="Product Name" name="productName" className="form-control" 
                                                value={this.state.productName} onChange={this.changeProductNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Category </label>
                                            <input placeholder="Category" name="category" className="form-control" 
                                                value={this.state.category} onChange={this.changeCategoryHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Image </label>
                                            <input placeholder="Image" name="image" className="form-control" 
                                                value={this.state.image} onChange={this.changeImageHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Price </label>
                                            <input placeholder="Price" name="price" className="form-control" 
                                                value={this.state.price} onChange={this.changePriceHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescHandler}/>
                                        </div>
                                        <br></br>
                                        <br></br>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateProduct}>Save</button>
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

export default CreateProductComponent