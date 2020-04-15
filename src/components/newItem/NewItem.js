import React from 'react';

export default class NewItem extends React.Component{
    render(){
        return(
            <form>
                <fieldset>
                <label htmlFor="item">Item:</label>
                <input name="item-name" id="item" type="text" placeholder="e.g. tiger butterfly" required/>
                <label htmlFor="category">Category:</label>
                <input name="category-name" id="category" type="text" placeholder="e.g. Bugs" required/>
                <label htmlFor="date">Date donated:</label>
                <input id="date" name="date-donated" type="date" placeholder="03/20/2020" required />
                <button type="submit">Submit</button>
                </fieldset>
            </form>
        )
    }
}