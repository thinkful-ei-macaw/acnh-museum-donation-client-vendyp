import React from "react";
import config from "../../config";
import TokenService from '../../services/token-service';
export default class MainPage extends React.Component {
  state = {
    option: "all",
    items: [],
  };

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/api/items`, {
      headers: {
        'authorization': `basic ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
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
        'authorization': `basic ${TokenService.getAuthToken()}`,
      },
    })
      .then(res=>{
        if(!res.ok)
          return res.json().then(e=>Promise.reject(e))
      })
      .then(()=>{
        this.handleDeleteItem(id)
      })
      .catch(e=>console.log({e}))
     
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
    console.log(this.state.items)
    const data =
      this.state.option === "all"
        ? this.state.items.map((x) => (
            <li>
              <img alt={x.name} src={x.img} /> {x.name} {x.date}{" "}
              <span onClick={(e) => this.handleDeleteRequest(e,x.id)}>
                <i class="fa fa-trash" aria-hidden="true"></i>
              </span>
            </li>
          ))
        : this.state.items
            .filter((m) => m.type === this.state.option)
            .map((x) => (
              <li>
                <img alt={x.name} src={x.img} /> {x.name} {x.date}{" "}
                <span onClick={(e) => this.handleDeleteRequest(e,x.id)}>
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </span>
              </li>
            ));
    return (
      <section>
        <div>
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
        <div>{data}</div>
      </section>
    );
  }
}
