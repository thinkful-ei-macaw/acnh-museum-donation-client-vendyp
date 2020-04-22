import React from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import "./Header.css";
export default class Header extends React.Component {

  
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.props.history.go('/login')
  };

  renderLogoutLink() {
    return (
      <div>
        <Link onClick={this.handleLogoutClick} to="/" className="color-font">
          Logout
        </Link>
      </div>
    );
  }
  renderLoginLink() {
    return (
      <div>
        <Link to="/login" className="color-font">Login</Link>
      </div>
    );
  }
  renderAddItemLink(){
    return(
      <div>
<Link to="/addItem" className="color-font">Add New Item</Link>
      </div>
    )
  }
  renderRegisterLink(){
    return(
      <div>
<Link to="/register" className="color-font">Register</Link>
      </div>
    )
  }
  render() {

    return (
      <section>
        <nav>
          <ul className="direct">
          <li><Link to="/" className="color-font">Home</Link></li>
          <li>{TokenService.hasAuthToken() ? this.renderAddItemLink(): ''}</li>
          <li>{TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}</li>
          <li>{TokenService.hasAuthToken()? '': this.renderRegisterLink() } </li>
          
           
           </ul>
        </nav>
        <div className="center">
          <h1 className="acnh-title">ACNH: Museum Donation Tracker</h1>
        </div>
      </section>
    );
  }
}
