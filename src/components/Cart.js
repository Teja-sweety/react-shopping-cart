import React, { Component } from 'react'
import formatCurrency from '../util';

export default class Cart extends Component {
    render() {
        const {cartItems} = this.props;
        return (
            <div>
                <div>
                    {
                        cartItems.length === 0 ? 
                        (<div className="cart cart-header">Cart is Empty</div>)
                        :(<div className="cart cart-header">You have {cartItems.length} items in cart!!!</div>)
                    }
                </div>
                <div>
                    <div className="cart">
                        <ul className="cart-items">
                            {cartItems.map(item =>(
                                <li key = {item._id}>
                                    <div>
                                        <img src={item.image} alt= {item.title}/>
                                    </div>
                                    <div>
                                        <div>{item.title}</div>
                                        <div className="right">
                                            {formatCurrency(item.price)}*({item.count}){" "}
                                            <button className="button" onClick={() => this.props.removeFromCart(item)}>Remove</button>
                                        </div>
                                        
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {cartItems.length !==0 && (
                          <div className="cart">
                          <div className="total">
                              <div>
                                  Total:{" "}
                                  {formatCurrency(
                                      cartItems.reduce((a,c) => a + (c.price*c.count),0)
                                  )}
                              </div>
                              <div className="button primary">Proceed</div>
                          </div>
                      </div>
                    )}
                  
                </div>
                                
            </div>
            
        )
    }
}