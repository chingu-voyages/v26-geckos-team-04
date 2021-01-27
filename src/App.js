import React from "react";
import Header from './components/Header/Header';
import Home from "./pages/Home";
import Product from "./pages/Product";
import ShoppingCart from "./pages/ShoppingCart";
// import Login from "./pages/Login";
// import Login from "./pages/Orders";
// import Login from "./pages/Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header /> 
            {/* <Orders /> */}
            <h1>Orders</h1>
          </Route>
          <Route path="/login">
            {/* <Login /> */}
            <h1>Log in</h1>
          </Route>
          <Route path="/checkout">
            <Header /> 
            <ShoppingCart />
          </Route>
          <Route path="/product">
            <Header /> 
            <Product />
          </Route>
          <Route path="/payment">
            <Header /> 
            {/* <Payment /> */}
            <h1>Payment</h1>
          </Route>
          <Route path="/">
            <Header /> 
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
