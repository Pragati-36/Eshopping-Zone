import axios from 'axios'
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class PostProducts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             productType:'',
             productName:'',
             category:'',
             image:'',
             price:'',
             description:''
        }
    }
    changeHandler = e =>{
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler = e=>{
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:8080/api/product',this.state)
        .then(response=>{
            alert("Products Added Successfully");
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    
    render() {
        const {productType,productName,category,image,price,description}=this.state
        return (
            <div>
                <Form onSubmit={this.submitHandler}>
                <Form.Group>
                    <Form.Label>Enter Product Type:</Form.Label>
                    <Form.Control type="text" placeholder="Enter product type" name="productType" value={productType} onChange={this.changeHandler} />
                </Form.Group>
                <br></br> 
                <Form.Group>
                    <Form.Label>Enter Product Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter product name" name="productName" value={productName} onChange={this.changeHandler} />
                </Form.Group>
                <br></br>
                <Form.Group>
                    <Form.Label>Enter Product Category:</Form.Label>
                    <Form.Control type="text" placeholder="Enter product category" name="category" value={category} onChange={this.changeHandler} />
                </Form.Group>
                <br></br>
                <Form.Group>
                    <Form.Label>Enter Product Image:</Form.Label>
                    <Form.Control type="text" placeholder="Enter product image" name="image" value={image} onChange={this.changeHandler} />
                </Form.Group>
                <br></br>
                <Form.Group>
                    <Form.Label>Enter Product Price:</Form.Label>
                    <Form.Control type="text" placeholder="Enter product price" name="price" value={price} onChange={this.changeHandler} />
                </Form.Group> 
                <br></br>
                <Form.Group>
                    <Form.Label>Enter Product Description:</Form.Label>
                    <Form.Control type="text" placeholder="Enter product price" name="description" value={description} onChange={this.changeHandler} />
                </Form.Group> 
                <br></br>
                <Button variant="primary" type="submit">Submit</Button>
                </Form> 
            </div>
        )
    }
}

export default PostProducts
