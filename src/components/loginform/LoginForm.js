import React from "react";
import config from '../../config'; 

export default class LoginForm extends React.Component {
  state = {
    username: { value: "" },
    password: { value: "" }
  };

  handleLogin(username, password){
    fetch(`${config.API_ENDPOINT}/login`,{
        method: 'POST',
        header:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username":username.value,
            "password": password.value
        })
    })
    .then(res=>{
        if(!res.ok){
            throw new Error(res.statusText)
        }
        return res.json()
    })
    .then(data=>console.log(data))
    .catch(err=>err.message)
  }
  validateInput = (event) => {
    event.preventDefault();
    const validateUsername = this.state.username.value;
    const validatePassword = this.state.password.value;

    if(validateUsername && validatePassword) {
        this.handleLogin(this.state.username, this.state.password)
        this.props.history.push('/')
    } 
}

  updateUsername(username) {
    this.setState({ username: { value: username } });
  }
  updatePassword(password) {
    this.setState({ password: { value: password } });
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.validateInput}>
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
