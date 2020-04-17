import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "../header/Header";
import AddItemPage from "../../routes/addItemPage/AddItemPage";
import MainPage from "../../routes/mainPage/MainPage";
import LoginPage from "../../routes/loginPage/LoginPage";

class App extends React.Component {
  render() {
    return (
      <div>
        
        <Router>
        {/* <Header /> */}
          {/* <Switch> */}
          <Route path="/" component={Header} />
            <Route exact path={"/"} component={MainPage} />
            <Route exact path={"/addItem"} component={AddItemPage} />
            <Route exact path={"/login"} component={LoginPage} />
          {/* </Switch> */}
        </Router>
      </div>
    );
  }
}

export default App;
