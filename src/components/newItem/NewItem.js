import React from "react";
import config from '../../config'; 
import TokenService from '../../services/token-service';

export default class NewItem extends React.Component {

    state ={
        name:{value:''},
        date:{value:''}
    };
    handleAddItem(name,date){
        fetch(`${config.API_ENDPOINT}/api/items`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                "name":name.value,
                "date": date.value
            })
        })
        .then(res=>{
            if(!res.ok){
                throw new Error(res.statusText)
            }
            return res.json()
        })
        .then(()=>{
          this.props.history.push('/')})
        .catch(err=>err.message)
      }
    updateName(name){
        this.setState({name:{value:name}})
    }
    updateDate(date){
        this.setState({date:{value:date}})
    }
    validateAddItemForm=(e)=>{
        e.preventDefault();
        console.log(this.state.name.value,this.state.date.value)
        const validName = this.state.name.value;
        const validDate = this.state.date.value;
        
        if(validDate && validName){
            this.handleAddItem(this.state.name, this.state.date)
        }
        
    }
  render() {
    return (
      <form onSubmit={this.validateAddItemForm}>
        <fieldset>
          <label htmlFor="item">Item:</label>
          <input
            name="item-name"
            id="item"
            type="text"
            placeholder="e.g. tiger butterfly"
            required
            value={this.state.name.value}
            onChange={(e)=>this.updateName(e.target.value)}
            aria-required="true"
            aria-label="Input the item you donated."
          />
          <label htmlFor="date">Date donated:</label>
          <input
            id="date"
            name="date-donated"
            type="date"
            placeholder="03/20/2020"
            required
            value={this.state.date.value}
            onChange={(e)=>this.updateDate(e.target.value)}
            aria-required="true"
            aria-label="Input the data you donated the item to the museum."
          />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    );
  }
}
