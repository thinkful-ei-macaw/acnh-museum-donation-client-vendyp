import React from "react";
import config from '../../config'; 
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
      this.props.history.push('/')
    })
    .catch(res=>{
      this.setState({error:res.error})
    })
  }
  // handleLogin=(e)=>{
  //   e.preventDefault();
  //   const username = this.state.username.value
  //   const password = this.state.password.value
  //   fetch(`${config.API_ENDPOINT}/api/auth/login`,{
  //       method: 'POST',
  //       header:{
  //           'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //           "username": username,
  //           "password": password
  //       })
  //   })
  //   .then(res=>{
  //       if(!res.ok){
  //           throw new Error(res.statusText)
  //       }
  //       this.handleSubmitJwtAuth(username, password)
  //       this.props.history.push('/')
  //   })
  //   .catch(err=>err.message)
  // }





// handleSubmitBasicAuth = ev => {
//   ev.preventDefault()
//   const { username, password } = ev.target

//   TokenService.saveAuthToken(
//     TokenService.makeBasicAuthToken(username.value, password.value)
//   )

//   username.value = ''
//   password.value = ''
//   this.props.onLoginSuccess()
// }

  updateUsername(username) {
    this.setState({ username: { value: username } });
  }
  updatePassword(password) {
    this.setState({ password: { value: password } });
  }

  render() {
    const { error } = this.state
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmitJwtAuth}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username.value}
            onChange={(e) => this.updateUsername(e.target.value)}
            required
            aria-required="true"
            aria-label="Login to the website with your username."
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="text"
            name="password"
            value={this.state.password.value}
            onChange={(e) => this.updatePassword(e.target.value)}
            required
            aria-required="true"
            aria-label="Login to the website with your password."
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
