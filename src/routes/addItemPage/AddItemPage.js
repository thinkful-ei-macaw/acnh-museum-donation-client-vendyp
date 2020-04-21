import React from 'react';
import NewItem from '../../components/newItem/NewItem';
import PropTypes from 'prop-types';
import TokenService from '../../services/token-service'
import { Redirect } from 'react-router-dom';
export default class AddItemPage extends React.Component {

    render(){
        if(!TokenService.hasAuthToken()){
           return <Redirect to='/login' />
        } else{
        return (
            <div>
                <NewItem history={this.props.history}/>
            </div>
        )
    }
    }
}

AddItemPage.propTypes={
    history:PropTypes.object.isRequired
}