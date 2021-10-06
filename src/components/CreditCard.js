import React, { Component } from 'react'
import StripeButton from "./StripeButton";

export class CreditCard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             price:this.props.match.params.totPrice
        }
    }
    
    render() {
        return (
            <div style={{textAlign:'center'}}>
                
                <h2>Please Proceed with payment</h2>
                <h4>Happy Ordering !!!</h4>
                <button style={{width:'180px',backgroundColor:'#f1356d',color:'white',border:'none',margin:'8px',height:'40px'}}><a href="/" style={{textDecoration:'none',color:'white'}}>Back to Home Page</a></button>
                <StripeButton price={this.state.price} />
            </div>
        )
    }
}

export default CreditCard
