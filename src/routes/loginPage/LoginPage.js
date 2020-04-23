import React from 'react';
import LoginForm from '../../components/loginform/LoginForm'
import PropTypes from 'prop-types';
export default class LoginPage extends React.Component {
onLoginSuccess=()=>{
    this.props.history.push('/list');
}
    
    render(){
        return (
            <div>
                <LoginForm onLoginSuccess={this.onLoginSuccess} history={this.props.history}/>
            </div>
        )
    }
}

LoginPage.propTypes={
    history:PropTypes.object.isRequired
}