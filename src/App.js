import React, { useEffect } from "react";
import Header from './components/Header/Header';
import Home from "./pages/Home";
import Product from "./pages/Product";
import Orders from "./pages/Orders";
import ShoppingCart from'./pages/ShoppingCart';
import Payment from './pages/Payment';
import Login from "./pages/Login";
import Footer from './components/Footer/Footer';
// import Login from "./pages/Orders";
// import Login from "./pages/Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./contexts/StateProvider";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function App() {
  // eslint-disable-next-line no-unused-vars
  const [_, dispatch] = useStateValue();

  useEffect(()=> {

      auth.onAuthStateChanged(authUser => {

      if(authUser) {
        dispatch({
          type:'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        });
      }   
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Header /> 
            <Orders />
          </Route>
          <Route path="/checkout">
            <Header /> 
            <ShoppingCart />
          </Route>
          <Route path="/product/:productId" component={Product} />
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements> 
          </Route>
          <Route path="/">
            <Header /> 
            <Home />
          </Route>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
