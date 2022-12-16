import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Importing components
import Navbar from "./components/Navbar";
import Cart from "./components/cart";
import Content from "./components/Content";
import Homepage from "./components/homepage";
import Footer from "./components/footer";
import Login from "./components/login";
import Aboutus from "./components/Aboutus";
import Faqs from "./components/faqs";
import Terms from "./components/Terms";
import Ewaste from "./components/Ewaste";
import Policy from "./components/Policy";

class App extends React.Component {
  render() {
    return (
      <Router >
        <div className="App">
          <Navbar />
          <Switch>
          <Route path="/">
              <Homepage />
            </Route>
            <Route path="/content/:category/:sub_category">
              <Content />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/Aboutus">
              <Aboutus />
            </Route>
            <Route path="/faqs">
              <Faqs />
            </Route>
            <Route path="/terms">
              <Terms />
            </Route>
            <Route path="/ewaste">
              <Ewaste />
            </Route>
            <Route path="/Policy">
              <Policy />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
