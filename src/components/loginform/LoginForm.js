import React from "react";
import './loginForm.css'
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service'
export default class LoginForm extends React.Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = {
    username: { value: "" },
    password: { value: "" },
    error: null
  };

  handleSubmitJwtAuth = (ev)=>{
    ev.preventDefault();
    this.setState({error:null})
    const {username,password} =ev.target
    AuthApiService.postLogin({
      username:username.value,
      password:password.value
    })
    .then(res=>{
      username.value=""
      password.value=""
      TokenService.saveAuthToken(res.authToken)
      this.props.onLoginSuccess()
      
    })
    .catch(res=>{
      this.setState({error:res.error})
    })
  }
  

  updateUsername(username) {
    this.setState({ username: { value: username } });
  }
  updatePassword(password) {
    this.setState({ password: { value: password } });
  }

  render() {
    const { error } = this.state
    return (
      <div className="backdrop">
        <h1 className="centered">Login</h1>
        <form className="centered column" onSubmit={this.handleSubmitJwtAuth}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username.value}
            onChange={(e) => this.updateUsername(e.target.value)}
            required
            autoComplete="off"
            aria-required="true"
            aria-label="Login to the website with your username."
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={this.state.password.value}
            onChange={(e) => this.updatePassword(e.target.value)}
            required
            autoComplete="off"
            aria-required="true"
            aria-label="Login to the website with your password."
          />
          <br />
          <button className="btn" type="submit">Submit</button>
        </form>
        <div className="alert">{error}</div>
      </div>
    );
  }
}
