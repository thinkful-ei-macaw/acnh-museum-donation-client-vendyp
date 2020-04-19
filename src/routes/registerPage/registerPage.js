import React from "react";
import RegisterForm from "../../components/registerform/registerForm";


export default class MainPage extends React.Component {
onRegisterSuccess=()=>{
    this.props.history.push('/login')
}

  render() {
    
    return (
      <div>
        <RegisterForm onRegisterSuccess={this.onRegisterSuccess} />
      </div>
    )
    
  }
}
