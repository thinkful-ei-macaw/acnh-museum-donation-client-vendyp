import React from "react";
import './LandingInfo.css'
export default class LandingInfo extends React.Component {
  render() {
    return (
      <section className="centered backdrop">
        <div>
          <h2>
            Welcome to Animal Crossing New Horizons: Museum Donation Tracker
          </h2>
        </div>
        <div className="para">
          <p>Please register or login to view contents.</p>
          <p>
            Registered users may keep track of all donated items to their museum
            by adding Fish, Fossils, Bugs and view them per category.
          </p>
          <p>Demo user:</p>
          <p>username: demouser</p>
          <p>password: 123456!Du</p>
        </div>
      </section>
    );
  }
}
