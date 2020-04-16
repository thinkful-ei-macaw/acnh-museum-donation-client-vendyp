import React from "react";
import Store from "../../store";
import config from "../../config";

export default class MainPage extends React.Component {
  state = {
    option: "all",
    items: []
  };

  componentDidMount(){
    fetch(`${config.API_ENDPOINT}/api/items`)
      .then(res=>{
        if(!res.ok){
            throw new Error(res.statusText)
        }
        return res.json()
    })
    .then(data=>{
      console.log(data)
      this.setState({items:data})
    })
    .catch(err=>err.message)
    
    
  } 
  handleDisplayType = (type) => () => {
    this.setState({
      option: type,
    });
  };

  render() {

    const data =
      this.state.option === "all"
        ? this.state.items.map((x) => (
            <li>
              <img src={x.img} />, {x.name}, {x.date}
            </li>
          ))
        : this.state.items
            .filter((m) => m.type === this.state.option)
            .map((x) => (
              <li>
                <img src={x.img}/>, {x.name}, {x.date}
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
