import React from "react";
import Store from "../../store";
export default class MainPage extends React.Component {
  state = {
    option: "all",
  };
  handleDisplayCategory = (category) => () => {
    this.setState({
      option: category,
    });
  };

  render() {
    const data =
      this.state.option === "all"
        ? Store.items.map((x) => (
            <li>
              <img src={x.photo} />, {x.name}, {x.date}
            </li>
          ))
        : Store.items
            .filter((m) => m.type === this.state.option)
            .map((x) => (
              <li>
                <img src={x.photo} />, {x.name}, {x.date}
              </li>
            ));
    return (
      <section>
        <h1>Animal Crossing New Horizons Museum Donation Manager</h1>
        <div>
          <a onClick={this.handleDisplayCategory("bugs")} href="#">
            Bugs
          </a>
          <a onClick={this.handleDisplayCategory("fossils")} href="#">
            Fossils
          </a>
          <a onClick={this.handleDisplayCategory("fish")} href="#">
            Fish
          </a>
          <a onClick={this.handleDisplayCategory("all")} href="#">
            All
          </a>
        </div>
        <div>{data}</div>
      </section>
    );
  }
}
