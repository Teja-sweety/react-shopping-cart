//feature_1 brach testing
import React from "react";
import './App.css';
import Products from "./components/products";
import data from "./data.json";

class App extends React.Component {
  constructor(){
    super();
    this.state={
      products:data.products,
      size:"",
      sort:"",
    };
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
              <Products products={this.state.products}></Products>              
            </div>
            <div className="sidebar">cart items</div>
          </div>
        </main>
        <footer>all rights are reserved</footer>
        
      </div>
    );
  }
  
}

export default App;
