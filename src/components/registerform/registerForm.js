import React from "react";
import AuthApiService from "../../services/auth-api-service";
import TokenService from "../../services/token-service";

export default class RegisterForm extends React.Component {
  state = {
    username: { value: "" },
    password: { value: "" },
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
    return (
      <form onSubmit={this.handleSubmitJwtAuth}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          type="text"
          value={this.state.username.value}
          onChange={(e) => this.updateUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="text"
          value={this.state.password.value}
          onChange={(e) => this.updatePassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
