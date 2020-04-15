import React from 'react';
import NewItem from '../../components/newItem/NewItem';


export default class AddItemPage extends React.Component {
    render(){
        return (
            <div>
                <h1>Add New Item!</h1>
                <NewItem />
            </div>
        )
    }
}