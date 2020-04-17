import React from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";

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

  render() {
    console.log('rendering...')
    return (
      <section>
        <nav>
          <Link to="/">Home</Link>
          {TokenService.hasAuthToken() ? this.renderAddItemLink(): ''}
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </nav>
        <div>
          <h1>ACNH: Museum Donation Tracker</h1>
        </div>
      </section>
    );
  }
}
