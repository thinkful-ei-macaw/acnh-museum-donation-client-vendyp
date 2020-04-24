import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "../header/Header";
import AddItemPage from "../../routes/addItemPage/AddItemPage";
import MainPage from "../../routes/mainPage/MainPage";
import LoginPage from "../../routes/loginPage/LoginPage";
import RegisterPage from "../../routes/registerPage/registerPage";
import LandingInfo from "../../routes/LandingInfo/LandingInfo";
import PrivateRoute from "../../routes/PrivateRoute/PrivateRoute";
import LoginRouteOnly from '../../routes/LoginRouteOnly/LoginRouteOnly'
import HomePageRouteOnly from "../../routes/HomePageRouteOnly/HomePageRouteOnly";
class App extends React.Component {
  render() {
    return (
      <div>
        
        <Router>
            <Route path="/" component={Header} />
            <HomePageRouteOnly exact path="/" component={LandingInfo} />
            <PrivateRoute exact path={"/list"} component={MainPage} />
            <PrivateRoute exact path={"/addItem"} component={AddItemPage} />
            <LoginRouteOnly exact path={"/login"} component={LoginPage} />
            <Route exact path={"/register"} component={RegisterPage} />
        </Router>
      </div>
    );
  }
}

export default App;
