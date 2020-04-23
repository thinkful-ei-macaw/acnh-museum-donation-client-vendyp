import React from "react";
import config from "../../config";
import TokenService from "../../services/token-service";
import './NewItem.css';
export default class NewItem extends React.Component {
  state = {
    name: { value: "" },
    date: { value: "" },
    error: null,
    possibleItems: [],
    displaySuggestions: true
  };
  componentDidMount(){
    fetch(`${config.API_ENDPOINT}/api/items/getall`,{
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      }
    })
      .then(res=>res.json())
      .then(data=>{
        this.setState({possibleItems:data})
      })
      .catch(e=>console.log(e))
  }
  handleAddItem(name, date) {
    fetch(`${config.API_ENDPOINT}/api/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        name: name.value,
        date: date.value,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((resJson) => {
        if (resJson.error) {
          this.setState({ error: resJson.error });
        } else {
          this.props.history.push("/list");
        }
      })
      .catch((e) => console.log(e));
  }
  updateName(name) {
    this.setState({ name: { value: name },displaySuggestions:true });
  }
  updateDate(date) {
    this.setState({ date: { value: date } });
  }
  
  validateAddItemForm = (e) => {
    e.preventDefault();
 
    const validName = this.state.name.value;
    const validDate = this.state.date.value;

    if (validDate && validName) {
      this.handleAddItem(this.state.name, this.state.date);
    }
  };

updateNameWithSelection(selection){
  this.setState({name:{value:selection},displaySuggestions:false})

}
  render() {
    const autoCompleteMatches = this.state.possibleItems
      .filter((x) =>
        x.toLowerCase().includes(this.state.name.value.toLowerCase())
      )
      .map((x) => <li onClick={()=>{this.updateNameWithSelection(x)}}>{x}</li>);
    const checkName = this.state.name.value === "" ? "" : autoCompleteMatches.slice(0,6);
    const error = this.state.error;

    return (
      <section className="backdrop">
        <h1 className="centered">Add New Item!</h1>
        <form className="column centered" onSubmit={this.validateAddItemForm}>
          <label htmlFor="item">Item:</label>
          <input
            name="item-name"
            id="item"
            type="text"
            placeholder="e.g. tiger butterfly"
            required
            value={this.state.name.value}
            onChange={(e) => this.updateName(e.target.value)}
            aria-required="true"
            aria-label="Input the item you donated."
            autoComplete="off"
          />
         <div className="list-height">{this.state.displaySuggestions === true && <ul className="name-select">{checkName}</ul>}</div>
          <label htmlFor="date">Date donated:</label>
          <input
            id="date"
            name="date-donated"
            type="date"
            placeholder="03/20/2020"
            required
            value={this.state.date.value}
            onChange={(e) => this.updateDate(e.target.value)}
            aria-required="true"
            aria-label="Input the data you donated the item to the museum."
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
        <div className="alert">{error}</div>
      </section>
    );
  }
}
