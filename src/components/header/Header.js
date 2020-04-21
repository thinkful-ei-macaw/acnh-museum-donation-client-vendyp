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
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }
  renderLoginLink() {
    return (
      <div>
        <Link to="/login">Login</Link>
      </div>
    );
  }
  renderAddItemLink(){
    return(
      <div>
<Link to="/addItem">Add New Item</Link>
      </div>
    )
  }
  renderRegisterLink(){
    return(
      <div>
<Link to="/register">Register</Link>
      </div>
    )
  }
  render() {

    return (
      <section>
        <nav>
          <ul className="direct">
          <li><Link to="/">Home</Link></li>
          <li>{TokenService.hasAuthToken() ? this.renderAddItemLink(): ''}</li>
          <li>{TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}</li>
          <li>{TokenService.hasAuthToken()? '': this.renderRegisterLink() } </li>
          
           
           </ul>
        </nav>
        <div>
          <h1 className="acnh-title center">ACNH: Museum Donation Tracker</h1>
        </div>
      </section>
    );
  }
}
