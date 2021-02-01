import React, { useEffect } from "react";
// import Header from './components/Header/Header';
import Home from "./pages/Home";
import Product from "./pages/Product";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
// import Login from "./pages/Orders";
// import Login from "./pages/Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./contexts/StateProvider";

function App() {
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
  },[]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            {/* <Header />  */}
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
            <h1>Log in</h1>
          </Route>
          <Route path="/checkout">
            {/* <Header />  */}
            {/* <ShoppingCart /> */}
          </Route>
          <Route path="/product/:productId" component={Product} />
          <Route path="/payment">
            {/* <Header />  */}
            {/* <Payment /> */}
            <h1>Payment</h1>
          </Route>
          <Route path="/">
            {/* <Header />  */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
