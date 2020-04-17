import React from 'react';
import LoginForm from '../../components/loginform/LoginForm'
import PropTypes from 'prop-types';
export default class LoginPage extends React.Component {

    
    render(){
        console.log(this.props)
        return (
            <div>
                <LoginForm history={this.props.history}/>
            </div>
        )
    }
}

LoginPage.propTypes={
    history:PropTypes.object.isRequired
}