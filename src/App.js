import React, { useEffect } from "react";
import Header from './components/Header/Header';
import Home from "./pages/Home";
import Product from "./pages/Product";
// import Orders from "./pages/Orders";
import ShoppingCart from'./pages/ShoppingCart';
import Login from "./pages/Login";
import Footer from './components/Footer/Footer';
// import Login from "./pages/Orders";
// import Login from "./pages/Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./contexts/StateProvider";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

//public key
const promise = loadStripe('pk_test_51IHDUzJ48jlA6xWamTOS9FybWpozON23BE7tsmhbPYOvPl0vNAM9SMqKvJ9YsYfyfen1W73y84itTyV1sBEBOJDh00Qc3EwjN1');

function App() {
  // eslint-disable-next-line no-unused-vars
  const [_, dispatch] = useStateValue();

  useEffect(()=> {

      auth.onAuthStateChanged(authUser => {
        console.log('The USER is >>>', authUser);

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
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
            <h1>Log in</h1>
          </Route>
          <Route path="/orders">
            <Header /> 
            {/* <Orders /> */}
          </Route>
          <Route path="/checkout">
            <Header /> 
            <ShoppingCart />
          </Route>
          <Route path="/product/:productId" component={Product} />
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              {/* <Payment /> */}
            </Elements> 
          </Route>
          <Route path="/">
            <Header /> 
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
