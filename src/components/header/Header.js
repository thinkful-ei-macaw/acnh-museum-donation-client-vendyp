import React from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import "./Header.css";
export default class Header extends React.Component {

  
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.props.history.push('/')
  };

  renderLogoutLink() {
    return (
      <li>
        <Link to="/login" onClick={this.handleLogoutClick} className="color-font">
          Logout
        </Link>
      </li>
    );
  }
  renderLoginLink() {
    return (
      <li>
        <Link to="/login" className="color-font">Login</Link>
      </li>
    );
  }
  renderAddItemLink(){
    return(
      <li>
<Link to="/addItem" className="color-font">Add New Item</Link>
      </li>
    )
  }
  renderRegisterLink(){
    return(
      <li>
<Link to="/register" className="color-font">Register</Link>
      </li>
    )
  }

  renderMainPageLink(){
    return(
      <li>
<Link to="/list" className="color-font">Donated Items</Link>
      </li>
    )
  }
renderHomePageLink(){
return(
  <li>
    <Link to="/" className="color-font">Home</Link>
  </li>
)
}
  render() {

    return (
      <section>
        <nav>
          <ul className="direct">
          {TokenService.hasAuthToken() ? '': this.renderHomePageLink()}
          {TokenService.hasAuthToken() ? this.renderMainPageLink(): ''}
          {TokenService.hasAuthToken() ? this.renderAddItemLink(): ''}
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
          : this.renderLoginLink()}
          {TokenService.hasAuthToken()? '': this.renderRegisterLink() }
          
           
           </ul>
        </nav>
        <div className="center">
          <h1 className="acnh-title">ACNH: Museum Donation Tracker</h1>
        </div>
      </section>
    );
  }
}
