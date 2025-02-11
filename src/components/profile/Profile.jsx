import { Component } from "react";
import "./style.css";
export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      img: "https://www.softdeveloper.de/s/cc_images/cache_44437267.jpg?t=1710770026",
      name: "fatma ghoul",
      profession: "Software Engineer",
      counter: 0,
    };
  }
  componentDidMount() {
    console.log("profile did mount");
    // setInterval(() => {
    //   this.setState({ counter: this.state.counter + 1 });
    // }, 1000);
  }
  componentDidUpdate() {
    console.log("profile updated")
  }
  render() {
    return (
      <div id="profile">
        <img src={this.state.img} />
        <h1>{this.state.name}</h1>
        <h2>{this.state.profession}</h2>
        <p> {this.state.counter} </p>
      </div>
    );
  }
}
