import DashBoard from "./DashBoard";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Card";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import RegisterUser from "./RegisterUser";
import About from "./About";

import "./styles/common.css";
import address from "../Components/Address";
import Payment from "./payment";
import ThankYou from "./ThankYou";
function Controller() {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={DashBoard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/RegisterUser" component={RegisterUser} />
          <Route exact path="/About" component={About} />
          <ProtectedRoute exact path="/pizza" component={Card} />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <ProtectedRoute exact path="/checkout" component={address} />
          <ProtectedRoute exact path="/payment" component={Payment} />
          <Route exact path="/thank-you" component={ThankYou} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Controller;
