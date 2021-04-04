//feature_1 brach testing
import React from "react";
import './App.css';
import Cart from "./components/Cart";
import Filter from "./components/filter";
import Products from "./components/products";
import data from "./data.json";

class App extends React.Component {
  constructor(){
    super();
    this.state={
      products:data.products,
      cartItems: [],
      size:"",
      sort:"",
    };
  }
  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach(item => {
      if(item._id ===product._id){
        item.count++;
        alreadyInCart = true;
      }
    })
    if(!alreadyInCart){
      cartItems.push({...product,count:1})
    }
    this.setState({cartItems})
  }

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({cartItems:cartItems.filter((x) => x._id !== product._id)})
  }

  filterProducts = (event) => {
    if(event.target.value === ""){
      this.setState({size:event.target.value, products:data.products})
    }
    
    this.setState(
      {size: event.target.value,
      products: data.products.filter(
        product => (product.availableSizes.indexOf(event.target.value)>=0)
      )
      }
    )
    
  }
  sortProducts = (event) => {
    const sort = event.target.value;
    this.setState(state => ({
      sort:sort,
      products:this.state.products.slice().sort((a,b)=>(
        sort==="lowest"?((a.price>b.price)? 1 :-1):
        sort==="highest"?((a.price<b.price)? 1: -1):
        ((a._id>b._id)? 1 : -1)
      ))
    }))

  }
  render(){
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter 
              count={this.state.products.length}
              size={this.state.size}
              sort={this.state.sort}
              filterProducts={this.filterProducts}
              sortProducts={this.sortProducts}
              ></Filter>
              <Products 
              addToCart={this.addToCart}
              products={this.state.products}></Products>              
            </div>
            <div className="sidebar">
              <Cart cartItems={this.state.cartItems}
              removeFromCart={this.removeFromCart}/>
            </div>
          </div>
        </main>
        <footer>all rights are reserved</footer>
        
      </div>
    );
  }
  
}

export default App;
