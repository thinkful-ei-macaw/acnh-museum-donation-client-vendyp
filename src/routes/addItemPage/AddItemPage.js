import React from 'react';
import NewItem from '../../components/newItem/NewItem';
import PropTypes from 'prop-types';

export default class AddItemPage extends React.Component {

    render(){
        return (
            <div>
                <h1>Add New Item!</h1>
                <NewItem history={this.props.history}/>
            </div>
        )
    }
}

AddItemPage.propTypes={
    history:PropTypes.object.isRequired
}