import React from "react";
import config from "../../config";
import TokenService from '../../services/token-service';
import "./MainItemList.css";

export default class MainPage extends React.Component {
  state = {
    option: "all",
    items: [],
    error:null
  };

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/api/items`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        this.setState({ items: data });
      })
      .catch((err) => err.message);
  }

  handleDeleteRequest(e,id){
    e.preventDefault();
    fetch(`${config.API_ENDPOINT}/api/items/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res=>{
        if(!res.ok)
          return res.json().then(e=>Promise.reject(e))
      })
      .then(()=>{
        this.handleDeleteItem(id)
      })
      .catch((res) => this.setState({ error: res.error }))
     
  }
  handleDisplayType = (type) => () => {
    this.setState({
      option: type,
    });
  };

  handleDeleteItem = (id) => {
    this.setState({
      items: this.state.items.filter((items) => items.id !== id),
    });
  };


  render() {

    const data =
      this.state.option === "all"
        ? this.state.items.map((x) => (
            <li className="item-list" key={x.id}>
              <img  alt={x.name} src={`${config.API_ENDPOINT}/static/img/${x.img}`} /> 
              <span className="nameItem">{x.name} {x.date.split('T')[0]}{" "}</span> 
              <span onClick={(e) => this.handleDeleteRequest(e,x.id)}>
                <i className="fa fa-trash"></i>
              </span>
            </li>
          ))
        : this.state.items
            .filter((m) => m.type === this.state.option)
            .map((x) => (
              <li className="item-list" key={x.id}>
                <img alt={x.name} src={`${config.API_ENDPOINT}/static/img/${x.img}`} /> 
                <span className="nameItem">{x.name} {x.date.split('T')[0]}{" "}</span> 
                <span className="deleteItem" onClick={(e) => this.handleDeleteRequest(e,x.id)}>
                  <i className="fa fa-trash"></i>
                </span>
              </li>
            ));
           
    return (
      <section className="backdrop">

        <div className="center title-links">
          <a onClick={this.handleDisplayType("Bugs")} href="#">
            Bugs
          </a>
          <a onClick={this.handleDisplayType("Fossils")} href="#">
            Fossils
          </a>
          <a onClick={this.handleDisplayType("Fish")} href="#">
            Fish
          </a>
          <a onClick={this.handleDisplayType("all")} href="#">
            All
          </a>
        </div>
        <div className="center"><ul>{data}</ul></div>
      </section>
    );
  }
}
