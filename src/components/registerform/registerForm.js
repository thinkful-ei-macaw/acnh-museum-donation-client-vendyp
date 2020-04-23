import React from "react";
import AuthApiService from "../../services/auth-api-service";
import TokenService from "../../services/token-service";
import "./registerForm.css";
export default class RegisterForm extends React.Component {
  state = {
    username: { value: "" },
    password: { value: "" },
    error: null,
  };

  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { username, password } = ev.target;
    AuthApiService.postRegister({
      username: username.value,
      password: password.value,
    })
      .then((res) => {
        username.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.props.onRegisterSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  updateUsername(username) {
    this.setState({ username: { value: username } });
  }
  updatePassword(password) {
    this.setState({ password: { value: password } });
  }
  render() {
    const error = this.state.error;
    return (
      <section className="backdrop">
        <h1 className="centered">Register</h1>
        <form className="column centered" onSubmit={this.handleSubmitJwtAuth}>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            name="username"
            type="text"
            value={this.state.username.value}
            onChange={(e) => this.updateUsername(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <span>Password must contain a min of 8 characters and must contain at least one upper case, lower case, number and special character.</span>
          <input
            id="password"
            name="password"
            type="text"
            value={this.state.password.value}
            onChange={(e) => this.updatePassword(e.target.value)}
          />
          <button className="btn" type="submit">Submit</button>
        </form>
        <div className="alert">{error}</div>
      </section>
    );
  }
}
